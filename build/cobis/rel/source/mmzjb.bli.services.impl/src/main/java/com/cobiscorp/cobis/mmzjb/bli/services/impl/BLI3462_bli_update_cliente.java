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

import com.cobiscorp.cobis.mmzjb.model.Cliente;

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
  @Property(name = "bli.id", value = "BLI3462_bli_update_cliente")
})
public class BLI3462_bli_update_cliente implements IBLIExecutor {
  private static final ILogger logger = LogFactory.getLogger(BLI3462_bli_update_cliente.class);

  public void execute(DynamicRequest dynamicRequest) {
    Mapper mapper = null;
    try {
      DataEntity row = BLIUtils.getRowDataEntity(dynamicRequest);
      List<Object> outListEntities = new ArrayList<Object>();
      DataEntity rowCliente;
      if (row != null && Cliente.ENTITY_NAME.equals(row.getEntityName())) {
        rowCliente = row;
      } else {
        rowCliente = BLIUtils.getDataEntity(dynamicRequest, Cliente.ENTITY_NAME);
        if (rowCliente == null) {
          throw new DesignerRuntimeException("No existe entidad " + Cliente.ENTITY_NAME);
        }
      }

      String wnombre = rowCliente.get(Cliente.NOMBRE);
      String wapellido = rowCliente.get(Cliente.APELLIDO);
      String wtelefono = rowCliente.get(Cliente.TELEFONO);
      String wcedula = rowCliente.get(Cliente.CEDULA);
      String wnacionalidad = rowCliente.get(Cliente.NACIONALIDAD);
      Integer widCliente = rowCliente.get(Cliente.IDCLIENTE);

      if (logger.isDebugEnabled()) {
        logger.logDebug("inputParameters: " + " NOMBRE: " + wnombre + " APELLIDO: " + wapellido + " TELEFONO: " + wtelefono + " CEDULA: " + wcedula + " NACIONALIDAD: " + wnacionalidad + " IDCLIENTE: " + widCliente);
      }

      mapper = MapperManager.get(Mapper.class);
      mapper.addInputParameter("@i_operacion", SqlType.CHAR, "U");
      mapper.addInputParameter("@t_trn", SqlType.INT, "25160");

      if (wnombre != null){
        mapper.addInputParameter("@i_nombre", SqlType.VARCHAR, BLIUtils.convertToType(wnombre, String.class));
      }

      if (wapellido != null){
        mapper.addInputParameter("@i_apellido", SqlType.VARCHAR, BLIUtils.convertToType(wapellido, String.class));
      }

      if (wtelefono != null){
        mapper.addInputParameter("@i_telefono", SqlType.VARCHAR, BLIUtils.convertToType(wtelefono, String.class));
      }

      if (wcedula != null){
        mapper.addInputParameter("@i_cedula", SqlType.VARCHAR, BLIUtils.convertToType(wcedula, String.class));
      }

      if (wnacionalidad != null){
        mapper.addInputParameter("@i_nacionalidad", SqlType.VARCHAR, BLIUtils.convertToType(wnacionalidad, String.class));
      }

      if (widCliente != null){
        mapper.addInputParameter("@i_id", SqlType.INT, BLIUtils.convertToType(widCliente, String.class));
      }
      boolean ret = mapper.execute(".cobis.sp_cliente_taller");
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
