package com.cobiscorp.cobis.mmzjb.model;

import java.util.ArrayList;
import java.util.List;
import com.cobiscorp.designer.api.Property;

public class FiltroBusquedaPersona {

	public static final String EN_FILTROBRU_224 = "EN_FILTROBRU_224";
	
	public static final String VERSION = "1.0.0";
	
	public static final String ENTITY_NAME = "FiltroBusquedaPersona";
	
	
	public static final Property<String> FILTRO = new Property<String>("filtro", String.class, false);
	
	public static final Property<String> TIPO = new Property<String>("tipo", String.class, false);
	
	public static final List<Property<?>> getPks() {
		List<Property<?>> pks = new ArrayList<Property<?>>();
		return pks;
	}

}
