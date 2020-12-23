/*
 * Archivo: T_MMZJBTFBVPWTC_111_FormEvent.java
 * Fecha: 22/12/2020 17:50:26
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
 * T_MMZJBTFBVPWTC_111_FormEvent - FormCliente
 *
 */
@Component
@Service({ FormEventBuilder.class })
@Properties({ @Property(name = "task.module", value = "MMZJB"),
             @Property(name = "task.submodule", value = "SSMMJ"),
             @Property(name = "task.id", value = "T_MMZJBTFBVPWTC_111"),
             @Property(name = "task.version", value = "1.0.0"),
             @Property(name = "eventId", value = "CECM_010CM_TMMZJBTF_J1T_597") })
public class T_MMZJBTFBVPWTC_111_FormEventCECM_010CM_TMMZJBTF_J1T_597 extends FormEventBuilder
 implements IExecuteCommand
{
	/**
	 * Instancia de Logger
	 */
	private static final ILogger logger = LogFactory.getLogger(T_MMZJBTFBVPWTC_111_FormEventCECM_010CM_TMMZJBTF_J1T_597.class);
    
	@Reference(name="iExecuteCommandCM_TMMZJBTF_J1T",referenceInterface =IExecuteCommand.class,bind = "setiExecuteCommandCM_TMMZJBTF_J1T",unbind = "unsetiExecuteCommandCM_TMMZJBTF_J1T",cardinality = ReferenceCardinality.MANDATORY_UNARY,policy=ReferencePolicy.DYNAMIC,target="(&(task.module=MMZJB)(task.submodule=SSMMJ)(task.id=T_MMZJBTFBVPWTC_111)(task.version=1.0.0)(task.controlId=CM_TMMZJBTF_J1T))")
	private IExecuteCommand iExecuteCommandCM_TMMZJBTF_J1T;

	public void setiExecuteCommandCM_TMMZJBTF_J1T(IExecuteCommand iExecuteCommandCM_TMMZJBTF_J1T) {
		this.iExecuteCommandCM_TMMZJBTF_J1T = iExecuteCommandCM_TMMZJBTF_J1T;
	}

	public void unsetiExecuteCommandCM_TMMZJBTF_J1T(IExecuteCommand iExecuteCommandCM_TMMZJBTF_J1T) {
		this.iExecuteCommandCM_TMMZJBTF_J1T = iExecuteCommandCM_TMMZJBTF_J1T;
	}

        	@Reference(bind = "setBLI6154_bli_cliente", unbind = "unsetBLI6154_bli_cliente", cardinality = ReferenceCardinality.MANDATORY_UNARY,target="(bli.id=BLI6154_bli_cliente)")
	private com.cobiscorp.designer.bli.api.IBLIExecutor bLI6154_bli_cliente;
	public void setBLI6154_bli_cliente(com.cobiscorp.designer.bli.api.IBLIExecutor bLI6154_bli_cliente) {
		this.bLI6154_bli_cliente = bLI6154_bli_cliente;
	}
	public void unsetBLI6154_bli_cliente(com.cobiscorp.designer.bli.api.IBLIExecutor bLI6154_bli_cliente) {
		this.bLI6154_bli_cliente = null;
	}
	@Override
	public void executeCommand(DynamicRequest arg0, IExecuteCommandEventArgs arg1) {
		try {
			iExecuteCommandCM_TMMZJBTF_J1T.executeCommand(arg0, arg1);
			bLI6154_bli_cliente.execute(arg0);
		} catch (Exception ex) {
			arg1.setSuccess(false);
			DesignerManagerException.handleException(arg1.getMessageManager(), ex, logger);
		}
	}


	@Override
	public void configure() {
        this.addExecuteCommandEvent("CM_TMMZJBTF_J1T", this);
	}

}

