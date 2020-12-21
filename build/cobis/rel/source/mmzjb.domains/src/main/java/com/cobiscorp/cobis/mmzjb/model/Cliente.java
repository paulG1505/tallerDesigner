package com.cobiscorp.cobis.mmzjb.model;

import java.util.ArrayList;
import java.util.List;
import com.cobiscorp.designer.api.Property;

public class Cliente {

	public static final String EN_CLIENTEXN_689 = "EN_CLIENTEXN_689";
	
	public static final String VERSION = "1.0.0";
	
	public static final String ENTITY_NAME = "Cliente";
	
	
	public static final Property<String> APELLIDO = new Property<String>("apellido", String.class, false);
	
	public static final Property<String> NOMBRE = new Property<String>("nombre", String.class, false);
	
	public static final Property<Integer> IDCLIENTE = new Property<Integer>("idCliente", Integer.class, false);
	
	public static final Property<String> NACIONALIDAD = new Property<String>("nacionalidad", String.class, false);
	
	public static final Property<String> TELEFONO = new Property<String>("telefono", String.class, false);
	
	public static final Property<String> CEDULA = new Property<String>("cedula", String.class, false);
	
	public static final List<Property<?>> getPks() {
		List<Property<?>> pks = new ArrayList<Property<?>>();
		return pks;
	}

}
