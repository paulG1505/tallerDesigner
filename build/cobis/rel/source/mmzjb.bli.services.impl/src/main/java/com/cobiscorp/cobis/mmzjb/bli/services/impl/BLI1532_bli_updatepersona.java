package com.cobiscorp.cobis.mmzjb.bli.services.impl;

import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Properties;
import org.apache.felix.scr.annotations.Property;
import org.apache.felix.scr.annotations.Service;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import com.cobiscorp.cobis.cwc.context.MapperManager;
import com.cobiscorp.cobis.cwc.kernel.sp.dto.MapperResult;
import com.cobiscorp.cobis.cwc.kernel.sp.impl.ExecutorSP;

import com.cobiscorp.cobis.mmzjb.model.Persona;

import com.cobiscorp.designer.api.DataEntity;
import com.cobiscorp.designer.api.DataEntityList;
import com.cobiscorp.designer.api.DynamicRequest;
import com.cobiscorp.designer.bli.util.BLIUtils;
import com.cobiscorp.designer.bli.api.IBLIExecutor;
import com.cobiscorp.designer.exception.DesignerRuntimeException;
import com.cobiscorp.designer.bli.manager.BliManagerException;
import com.cobiscorp.cobis.cwc.server.information.ServerParamUtil;
import com.cobiscorp.cobis.commons.domains.log.ILogger;
import com.cobiscorp.cobis.commons.log.LogFactory;
import com.cobiscorp.ecobis.map.Mapper;
import com.cobiscorp.ecobis.map.dto.Result;
import com.cobiscorp.ecobis.map.enums.SqlType;

@Component
@Service({ IBLIExecutor.class })
@Properties({
  @Property(name = "task.module", value = "MMZJB"),
  @Property(name = "bli.id", value = "BLI1532_bli_updatepersona")
})
public class BLI1532_bli_updatepersona implements IBLIExecutor {
  private static final ILogger logger = LogFactory.getLogger(BLI1532_bli_updatepersona.class);

  public void execute(DynamicRequest dynamicRequest) {
    Mapper mapper = null;
    try {
      DataEntity row = BLIUtils.getRowDataEntity(dynamicRequest);
      List<Object> outListEntities = new ArrayList<Object>();
      DataEntity rowPersona;
      if (row != null && Persona.ENTITY_NAME.equals(row.getEntityName())) {
        rowPersona = row;
      } else {
        rowPersona = BLIUtils.getDataEntity(dynamicRequest, Persona.ENTITY_NAME);
        if (rowPersona == null) {
          throw new DesignerRuntimeException("No existe entidad " + Persona.ENTITY_NAME);
        }
      }

      String wnombre = rowPersona.get(Persona.NOMBRE);
      String wapellido = rowPersona.get(Persona.APELLIDO);
      String wtelefono = rowPersona.get(Persona.TELEFONO);
      String wsexo = rowPersona.get(Persona.SEXO);
      String westado = rowPersona.get(Persona.ESTADO);
      String wnombreC = rowPersona.get(Persona.NOMBREC);
      String wapellidoC = rowPersona.get(Persona.APELLIDOC);
      Integer widPersona = rowPersona.get(Persona.IDPERSONA);

      if (logger.isDebugEnabled()) {
        logger.logDebug("inputParameters: " + " NOMBRE: " + wnombre + " APELLIDO: " + wapellido + " TELEFONO: " + wtelefono + " SEXO: " + wsexo + " ESTADO: " + westado + " NOMBREC: " + wnombreC + " APELLIDOC: " + wapellidoC + " IDPERSONA: " + widPersona);
      }

      mapper = MapperManager.get(Mapper.class);
      mapper.addInputParameter("@i_operacion", SqlType.CHAR, "U");

      if (wnombre != null){
        mapper.addInputParameter("@i_nombre", SqlType.VARCHAR, BLIUtils.convertToType(wnombre, String.class));
      }

      if (wapellido != null){
        mapper.addInputParameter("@i_apellido", SqlType.VARCHAR, BLIUtils.convertToType(wapellido, String.class));
      }

      if (wtelefono != null){
        mapper.addInputParameter("@i_telefono", SqlType.VARCHAR, BLIUtils.convertToType(wtelefono, String.class));
      }
      mapper.addInputParameter("@t_trn", SqlType.INT, "2515");

      if (wsexo != null){
        mapper.addInputParameter("@i_sexo", SqlType.VARCHAR, BLIUtils.convertToType(wsexo, String.class));
      }

      if (westado != null){
        mapper.addInputParameter("@i_estado_civil", SqlType.CHAR, BLIUtils.convertToType(westado, String.class));
      }

      if (wnombreC != null){
        mapper.addInputParameter("@i_nombre_conyugue", SqlType.VARCHAR, BLIUtils.convertToType(wnombreC, String.class));
      }

      if (wapellidoC != null){
        mapper.addInputParameter("@i_apellido_conyugue", SqlType.VARCHAR, BLIUtils.convertToType(wapellidoC, String.class));
      }

      if (widPersona != null){
        mapper.addInputParameter("@i_id", SqlType.INT, BLIUtils.convertToType(widPersona, String.class));
      }
      boolean ret = mapper.execute(".cobis.sp_persona_taller");
      int retCode = mapper.returnCode();
      if (ret && (retCode == 0)) {




        if (logger.isDebugEnabled()) {
          logger.logDebug("returnCode: " + retCode);
        }
      } else {
        BliManagerException.handleMapperException(mapper);
      }
    } catch (Exception ex) {
      BliManagerException.handleBliException(ex);
    } finally {
      if (mapper != null)
        mapper.check();
    }
  }

}
