/*
 * Archivo: Q_CLIEENNT_KK23_QueryEvent.java
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
 * Q_CLIEENNT_KK23_QueryEvent - ClienteQuery
 *
 */
@Component
@Service({QueryEventBuilder.class})
@Properties(value={
		@Property(name = "query.id", value = "Q_CLIEENNT_KK23"),
		@Property(name = "query.version", value = "1.0.0")
})
public class Q_CLIEENNT_KK23_QueryEvent extends QueryEventBuilder
 implements IExecuteQuery
{

	/**
	 * Instancia de Logger
	 */
	private static final ILogger logger = LogFactory.getLogger(Q_CLIEENNT_KK23_QueryEvent.class);
	
	@Reference(name="iExecuteQueryQ_CLIEENNT_KK23",referenceInterface =IExecuteQuery.class,bind = "setiExecuteQueryQ_CLIEENNT_KK23",unbind = "unsetiExecuteQueryQ_CLIEENNT_KK23",cardinality = ReferenceCardinality.MANDATORY_UNARY,policy=ReferencePolicy.DYNAMIC,target="(&(query.version=1.0.0)(query.id=Q_CLIEENNT_KK23))")
	private IExecuteQuery iExecuteQueryQ_CLIEENNT_KK23;

	public void setiExecuteQueryQ_CLIEENNT_KK23(IExecuteQuery iExecuteQueryQ_CLIEENNT_KK23) {
		this.iExecuteQueryQ_CLIEENNT_KK23 = iExecuteQueryQ_CLIEENNT_KK23;
	}

	public void unsetiExecuteQueryQ_CLIEENNT_KK23(IExecuteQuery iExecuteQueryQ_CLIEENNT_KK23) {
		this.iExecuteQueryQ_CLIEENNT_KK23 = iExecuteQueryQ_CLIEENNT_KK23;
	}

	@Reference(bind = "setBLI5776_cli_consulta_cliente", unbind = "unsetBLI5776_cli_consulta_cliente", cardinality = ReferenceCardinality.MANDATORY_UNARY,target="(bli.id=BLI5776_cli_consulta_cliente)")
	private com.cobiscorp.designer.bli.api.IBLIExecutor bLI5776_cli_consulta_cliente;
	public void setBLI5776_cli_consulta_cliente(com.cobiscorp.designer.bli.api.IBLIExecutor bLI5776_cli_consulta_cliente) {
		this.bLI5776_cli_consulta_cliente = bLI5776_cli_consulta_cliente;
	}
	public void unsetBLI5776_cli_consulta_cliente(com.cobiscorp.designer.bli.api.IBLIExecutor bLI5776_cli_consulta_cliente) {
		this.bLI5776_cli_consulta_cliente = null;
	}
	@Override
	public List<?> executeDataEvent(DynamicRequest arg0, IExecuteQueryEventArgs arg1) {
		List<?> lst = null;
		try {
			bLI5776_cli_consulta_cliente.execute(arg0);
			lst = iExecuteQueryQ_CLIEENNT_KK23.executeDataEvent(arg0, arg1);
		} catch (Exception ex) {
			arg1.setSuccess(false);
			DesignerManagerException.handleException(arg1.getMessageManager(), ex, logger);
		}
		return lst;
	}


	@Override
	public void configure() {
	    this.addQueryEvent("Q_CLIEENNT_KK23", this);
	}

}

