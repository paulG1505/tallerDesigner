/*
 * Archivo: Q_PERSANOO_FF85_QueryEvent.java
 * Fecha: 21/12/2020 15:31:11
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

package com.cobiscorp.cobis.mmzjb.customevents.query;

import java.util.List;

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
import com.cobiscorp.designer.api.builder.QueryEventBuilder;
import com.cobiscorp.designer.api.customization.*;
import com.cobiscorp.designer.api.customization.arguments.*;
import com.cobiscorp.designer.api.managers.DesignerManagerException;

/**
 * Personalizacion de Eventos del Query
 *
 * Q_PERSANOO_FF85_QueryEvent - PersonaQuery
 *
 */
@Component
@Service({QueryEventBuilder.class})
@Properties(value={
		@Property(name = "query.id", value = "Q_PERSANOO_FF85"),
		@Property(name = "query.version", value = "1.0.0")
})
public class Q_PERSANOO_FF85_QueryEvent extends QueryEventBuilder
 implements IExecuteQuery
{

	/**
	 * Instancia de Logger
	 */
	private static final ILogger logger = LogFactory.getLogger(Q_PERSANOO_FF85_QueryEvent.class);
	
	@Reference(name="iExecuteQueryQ_PERSANOO_FF85",referenceInterface =IExecuteQuery.class,bind = "setiExecuteQueryQ_PERSANOO_FF85",unbind = "unsetiExecuteQueryQ_PERSANOO_FF85",cardinality = ReferenceCardinality.MANDATORY_UNARY,policy=ReferencePolicy.DYNAMIC,target="(&(query.version=1.0.0)(query.id=Q_PERSANOO_FF85))")
	private IExecuteQuery iExecuteQueryQ_PERSANOO_FF85;

	public void setiExecuteQueryQ_PERSANOO_FF85(IExecuteQuery iExecuteQueryQ_PERSANOO_FF85) {
		this.iExecuteQueryQ_PERSANOO_FF85 = iExecuteQueryQ_PERSANOO_FF85;
	}

	public void unsetiExecuteQueryQ_PERSANOO_FF85(IExecuteQuery iExecuteQueryQ_PERSANOO_FF85) {
		this.iExecuteQueryQ_PERSANOO_FF85 = iExecuteQueryQ_PERSANOO_FF85;
	}

	@Reference(bind = "setBLI5819_bli_getpersonas", unbind = "unsetBLI5819_bli_getpersonas", cardinality = ReferenceCardinality.MANDATORY_UNARY,target="(bli.id=BLI5819_bli_getpersonas)")
	private com.cobiscorp.designer.bli.api.IBLIExecutor bLI5819_bli_getpersonas;
	public void setBLI5819_bli_getpersonas(com.cobiscorp.designer.bli.api.IBLIExecutor bLI5819_bli_getpersonas) {
		this.bLI5819_bli_getpersonas = bLI5819_bli_getpersonas;
	}
	public void unsetBLI5819_bli_getpersonas(com.cobiscorp.designer.bli.api.IBLIExecutor bLI5819_bli_getpersonas) {
		this.bLI5819_bli_getpersonas = null;
	}
	@Override
	public List<?> executeDataEvent(DynamicRequest arg0, IExecuteQueryEventArgs arg1) {
		List<?> lst = null;
		try {
			bLI5819_bli_getpersonas.execute(arg0);
			lst = iExecuteQueryQ_PERSANOO_FF85.executeDataEvent(arg0, arg1);
		} catch (Exception ex) {
			arg1.setSuccess(false);
			DesignerManagerException.handleException(arg1.getMessageManager(), ex, logger);
		}
		return lst;
	}


	@Override
	public void configure() {
	    this.addQueryEvent("Q_PERSANOO_FF85", this);
	}

}

