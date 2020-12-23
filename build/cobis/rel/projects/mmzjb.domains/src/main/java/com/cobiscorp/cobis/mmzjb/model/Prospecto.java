package com.cobiscorp.cobis.mmzjb.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import com.cobiscorp.designer.api.Property;

public class Prospecto {

	public static final String EN_PROSPECOT_671 = "EN_PROSPECOT_671";
	
	public static final String VERSION = "1.0.0";
	
	public static final String ENTITY_NAME = "Prospecto";
	
	
	public static final Property<String> APELLIDO = new Property<String>("apellido", String.class, false);
	
	public static final Property<Date> FECHA = new Property<Date>("fecha", Date.class, false);
	
	public static final Property<Integer> IDPROSPECTO = new Property<Integer>("idProspecto", Integer.class, false);
	
	public static final Property<String> TIPO = new Property<String>("tipo", String.class, false);
	
	public static final Property<String> NOMBRE = new Property<String>("nombre", String.class, false);
	
	public static final Property<String> ESTADO = new Property<String>("estado", String.class, false);
	
	public static final Property<String> TELEFONO = new Property<String>("telefono", String.class, false);
	
	public static final List<Property<?>> getPks() {
		List<Property<?>> pks = new ArrayList<Property<?>>();
		return pks;
	}

}
