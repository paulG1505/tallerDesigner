package com.cobiscorp.cobis.mmzjb.model;

import java.util.ArrayList;
import java.util.List;
import com.cobiscorp.designer.api.Property;

public class Persona {

	public static final String EN_PERSONAHF_537 = "EN_PERSONAHF_537";
	
	public static final String VERSION = "1.0.0";
	
	public static final String ENTITY_NAME = "Persona";
	
	
	public static final Property<Integer> IDPERSONA = new Property<Integer>("idPersona", Integer.class, false);
	
	public static final Property<String> APELLIDO = new Property<String>("apellido", String.class, false);
	
	public static final Property<String> NOMBREC = new Property<String>("nombreC", String.class, false);
	
	public static final Property<String> NOMBRE = new Property<String>("nombre", String.class, false);
	
	public static final Property<String> TELEFONO = new Property<String>("telefono", String.class, false);
	
	public static final Property<String> SEXO = new Property<String>("sexo", String.class, false);
	
	public static final Property<String> APELLIDOC = new Property<String>("apellidoC", String.class, false);
	
	public static final Property<String> ESTADO = new Property<String>("estado", String.class, false);
	
	public static final List<Property<?>> getPks() {
		List<Property<?>> pks = new ArrayList<Property<?>>();
		return pks;
	}

}
