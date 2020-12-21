/*
 * Archivo: T_MMZJBOCOGRIDN_472_FormEvent.java
 * Fecha: 21/12/2020 15:31:49
 *
 * Esta aplicacion es parte de los paquetes bancarios propiedad de COBISCORP.
 * Su uso no autorizado queda expresamente prohibido asi como cualquier
 * alteracion o agregado hecho por alguno de sus usuarios sin el debido
 * consentimiento por escrito de COBISCORP.
 * Este programa esta protegido por la ley de derechos de autor y por las
 * convenciones internacionales de propiedad intelectual. Su uso no
 * autorizado dara derecho a COBISCORP para obtener ordenes de secuestro
 * o retencion y para perseguir penalmente a los autores de cualquier infraccion.
 */

package com.cobiscorp.cobis.mmzjb.customevents.form;

import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Properties;
import org.apache.felix.scr.annotations.Property;
import org.apache.felix.scr.annotations.Reference;
import org.apache.felix.scr.annotations.ReferenceCardinality;
import org.apache.felix.scr.annotations.ReferencePolicy;
import org.apache.felix.scr.annotations.Service;

import com.cobiscorp.cobis.commons.domains.log.ILogger;
import com.cobiscorp.cobis.commons.log.LogFactory;
import com.cobiscorp.designer.api.DataEntity;
import com.cobiscorp.designer.api.DynamicRequest;
import com.cobiscorp.designer.api.builder.FormEventBuilder;
import com.cobiscorp.designer.api.customization.*;
import com.cobiscorp.designer.api.customization.arguments.*;
import com.cobiscorp.designer.api.managers.DesignerManagerException;

/**
 * Personalizacion de Eventos del Formulario
 *
 * T_MMZJBOCOGRIDN_472_FormEvent - FormPersona
 *
 */
@Component
@Service({ FormEventBuilder.class })
@Properties({ @Property(name = "task.module", value = "MMZJB"),
             @Property(name = "task.submodule", value = "SSMMJ"),
             @Property(name = "task.id", value = "T_MMZJBOCOGRIDN_472"),
             @Property(name = "task.version", value = "1.0.0"),
             @Property(name = "eventId", value = "CECM_010CM_TMMZJBOC_SC6_924") })
public class T_MMZJBOCOGRIDN_472_FormEventCECM_010CM_TMMZJBOC_SC6_924 extends FormEventBuilder
 implements IExecuteCommand
{
	/**
	 * Instancia de Logger
	 */
	private static final ILogger logger = LogFactory.getLogger(T_MMZJBOCOGRIDN_472_FormEventCECM_010CM_TMMZJBOC_SC6_924.class);
    
	@Reference(name="iExecuteCommandCM_TMMZJBOC_SC6",referenceInterface =IExecuteCommand.class,bind = "setiExecuteCommandCM_TMMZJBOC_SC6",unbind = "unsetiExecuteCommandCM_TMMZJBOC_SC6",cardinality = ReferenceCardinality.MANDATORY_UNARY,policy=ReferencePolicy.DYNAMIC,target="(&(task.module=MMZJB)(task.submodule=SSMMJ)(task.id=T_MMZJBOCOGRIDN_472)(task.version=1.0.0)(task.controlId=CM_TMMZJBOC_SC6))")
	private IExecuteCommand iExecuteCommandCM_TMMZJBOC_SC6;

	public void setiExecuteCommandCM_TMMZJBOC_SC6(IExecuteCommand iExecuteCommandCM_TMMZJBOC_SC6) {
		this.iExecuteCommandCM_TMMZJBOC_SC6 = iExecuteCommandCM_TMMZJBOC_SC6;
	}

	public void unsetiExecuteCommandCM_TMMZJBOC_SC6(IExecuteCommand iExecuteCommandCM_TMMZJBOC_SC6) {
		this.iExecuteCommandCM_TMMZJBOC_SC6 = iExecuteCommandCM_TMMZJBOC_SC6;
	}

        	@Reference(bind = "setBLI5163_bli_ingresopersona", unbind = "unsetBLI5163_bli_ingresopersona", cardinality = ReferenceCardinality.MANDATORY_UNARY,target="(bli.id=BLI5163_bli_ingresopersona)")
	private com.cobiscorp.designer.bli.api.IBLIExecutor bLI5163_bli_ingresopersona;
	public void setBLI5163_bli_ingresopersona(com.cobiscorp.designer.bli.api.IBLIExecutor bLI5163_bli_ingresopersona) {
		this.bLI5163_bli_ingresopersona = bLI5163_bli_ingresopersona;
	}
	public void unsetBLI5163_bli_ingresopersona(com.cobiscorp.designer.bli.api.IBLIExecutor bLI5163_bli_ingresopersona) {
		this.bLI5163_bli_ingresopersona = null;
	}
	@Override
	public void executeCommand(DynamicRequest arg0, IExecuteCommandEventArgs arg1) {
		try {
			iExecuteCommandCM_TMMZJBOC_SC6.executeCommand(arg0, arg1);
			bLI5163_bli_ingresopersona.execute(arg0);
		} catch (Exception ex) {
			arg1.setSuccess(false);
			DesignerManagerException.handleException(arg1.getMessageManager(), ex, logger);
		}
	}


	@Override
	public void configure() {
        this.addExecuteCommandEvent("CM_TMMZJBOC_SC6", this);
	}

}

