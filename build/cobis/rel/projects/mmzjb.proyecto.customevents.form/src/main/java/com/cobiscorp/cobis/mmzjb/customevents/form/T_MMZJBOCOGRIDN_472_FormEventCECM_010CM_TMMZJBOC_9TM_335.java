/*
 * Archivo: T_MMZJBOCOGRIDN_472_FormEvent.java
 * Fecha: 22/12/2020 17:50:19
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
             @Property(name = "eventId", value = "CECM_010CM_TMMZJBOC_9TM_335") })
public class T_MMZJBOCOGRIDN_472_FormEventCECM_010CM_TMMZJBOC_9TM_335 extends FormEventBuilder
 implements IExecuteCommand
{
	/**
	 * Instancia de Logger
	 */
	private static final ILogger logger = LogFactory.getLogger(T_MMZJBOCOGRIDN_472_FormEventCECM_010CM_TMMZJBOC_9TM_335.class);
    
	@Reference(name="iExecuteCommandCM_TMMZJBOC_9TM",referenceInterface =IExecuteCommand.class,bind = "setiExecuteCommandCM_TMMZJBOC_9TM",unbind = "unsetiExecuteCommandCM_TMMZJBOC_9TM",cardinality = ReferenceCardinality.MANDATORY_UNARY,policy=ReferencePolicy.DYNAMIC,target="(&(task.module=MMZJB)(task.submodule=SSMMJ)(task.id=T_MMZJBOCOGRIDN_472)(task.version=1.0.0)(task.controlId=CM_TMMZJBOC_9TM))")
	private IExecuteCommand iExecuteCommandCM_TMMZJBOC_9TM;

	public void setiExecuteCommandCM_TMMZJBOC_9TM(IExecuteCommand iExecuteCommandCM_TMMZJBOC_9TM) {
		this.iExecuteCommandCM_TMMZJBOC_9TM = iExecuteCommandCM_TMMZJBOC_9TM;
	}

	public void unsetiExecuteCommandCM_TMMZJBOC_9TM(IExecuteCommand iExecuteCommandCM_TMMZJBOC_9TM) {
		this.iExecuteCommandCM_TMMZJBOC_9TM = iExecuteCommandCM_TMMZJBOC_9TM;
	}

        	@Reference(bind = "setBLI1532_bli_updatepersona", unbind = "unsetBLI1532_bli_updatepersona", cardinality = ReferenceCardinality.MANDATORY_UNARY,target="(bli.id=BLI1532_bli_updatepersona)")
	private com.cobiscorp.designer.bli.api.IBLIExecutor bLI1532_bli_updatepersona;
	public void setBLI1532_bli_updatepersona(com.cobiscorp.designer.bli.api.IBLIExecutor bLI1532_bli_updatepersona) {
		this.bLI1532_bli_updatepersona = bLI1532_bli_updatepersona;
	}
	public void unsetBLI1532_bli_updatepersona(com.cobiscorp.designer.bli.api.IBLIExecutor bLI1532_bli_updatepersona) {
		this.bLI1532_bli_updatepersona = null;
	}
	@Override
	public void executeCommand(DynamicRequest arg0, IExecuteCommandEventArgs arg1) {
		try {
			iExecuteCommandCM_TMMZJBOC_9TM.executeCommand(arg0, arg1);
			bLI1532_bli_updatepersona.execute(arg0);
		} catch (Exception ex) {
			arg1.setSuccess(false);
			DesignerManagerException.handleException(arg1.getMessageManager(), ex, logger);
		}
	}


	@Override
	public void configure() {
        this.addExecuteCommandEvent("CM_TMMZJBOC_9TM", this);
	}

}

