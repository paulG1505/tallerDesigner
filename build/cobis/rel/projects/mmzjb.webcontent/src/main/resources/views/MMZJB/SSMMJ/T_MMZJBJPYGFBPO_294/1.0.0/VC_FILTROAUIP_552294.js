//Designer Generator v 7.2.0 - SPR 2020-20 08/10/2020
var designerEvents = designerEvents || {};
designerEvents.api = designerEvents.api || {};
designerEvents.api.formfiltro = designerEvents.api.formfiltro || designer.dsgEvents();

function VC_FILTROAUIP_552294(cobisMainModule) {
    cobisMainModule.controllerProvider.register("VC_FILTROAUIP_552294_MAIN_CTRL", ["$scope", "breadcrumbs",

    function($scope, breadcrumbs) {
        $scope.breadcrumbs = breadcrumbs;
    }]);
    cobisMainModule.controllerProvider.register("VC_FILTROAUIP_552294_CTRL", ["cobisMessage", cobis.modules.CONTAINER + ".preferencesService", "dsgnrUtils", "designer", "$scope", "$location", "$document", "$parse", "$filter", "$modal", "$q", "$compile", "$timeout", "$translate",

    function(cobisMessage, preferencesService, dsgnrUtils, designer, $scope, $location, $document, $parse, $filter, $modal, $q, $compile, $timeout, $translate) {
        $scope.designer = designer;
        $scope.validatorOptions = validatorOptions;
        $scope.vc = designer.initViewContainer({
            moduleId: "MMZJB",
            subModuleId: "SSMMJ",
            taskId: "T_MMZJBJPYGFBPO_294",
            taskVersion: "1.0.0",
            viewContainerId: "VC_FILTROAUIP_552294",
            hasCloseModalEvent: false,
            serverEvents: true
        },
            "${contextPath}/resources/MMZJB/SSMMJ/T_MMZJBJPYGFBPO_294",
        designerEvents.api.formfiltro,
        $scope.rowData);
        $scope.kendo = kendo;
        //Lectura de Preferencias Visuales del Usuario, si no existen se aplican unas por default
        $scope.currencySymbol = kendo.cultures.current.numberFormat.currency.symbol;
        if (preferencesService.getGlobalization(cobis.constant.CURRENCY_SYMBOL)) {
            $scope.currencySymbol = preferencesService.getGlobalization(cobis.constant.CURRENCY_SYMBOL);
        }
        if (preferencesService.getGlobalization(cobis.constant.DATE_FORMAT)) {
            $scope.dateFormat = preferencesService.getGlobalization(cobis.constant.DATE_FORMAT);
        } else {
            $scope.dateFormat = 'yyyy/MM/dd';
        }
        if (preferencesService.getGlobalization(cobis.constant.DATE_FORMAT_PLACEHOLDER)) {
            $scope.dateFormatPlaceholder = preferencesService.getGlobalization(cobis.constant.DATE_FORMAT_PLACEHOLDER);
        } else {
            $scope.dateFormatPlaceholder = $scope.dateFormat;
        }
        $scope.vc.routeProvider = cobisMainModule.routeProvider;
        if (!$scope.vc.loaded) {
            var page = {
                hasTemporaryDataSupport: false,
                hasInitDataSupport: false,
                hasChangeInitDataSupport: false,
                hasSearchRenderEvent: false,
                ejecTemporaryData: false,
                ejecInitData: false,
                ejecChangeInitData: false,
                ejecSearchRenderEvent: false,
                hasTemporaryData: false,
                hasInitData: false,
                hasChangeInitData: false,
                hasCRUDSupport: false,
                vcName: 'VC_FILTROAUIP_552294'
            };
            if (typeof designer.constants.cobisPatterns !== 'undefined' && typeof designer.constants.cobisPatterns.formType !== 'undefined') {
                $scope.vc.cobisPattern = designer.constants.cobisPatterns.formType.NONE;
                $scope.vc.isConsolidateView = ($scope.vc.cobisPattern === designer.constants.cobisPatterns.formType.CONSOLIDATE_VIEW);
            } else {
                //CobisPattern no definido en framework de Designer como constante. Actualizar Framework
                $scope.vc.cobisPattern = 0;
                $scope.vc.isConsolidateView = false;
            }
            if (($scope.vc.isModal($scope) || $scope.isDesignerInclude || $scope.isDesignerDetail) && angular.isDefined($scope.queryParameters)) {
                $scope.vc.pk = $scope.queryParameters.pk;
                $scope.vc.mode = parseInt($scope.queryParameters.mode || designer.constants.mode.Insert);
            } else {
                $scope.vc.pk = $location.search().pk;
                $scope.vc.mode = parseInt($location.search().mode || designer.constants.mode.Insert);
            }
            $scope.vc.args.pk = $scope.vc.pk;
            $scope.vc.args.mode = $scope.vc.mode;
            if (cobis.userContext.getValue(cobis.constant.USER_NAME)) {
                $scope.vc.args.user = cobis.userContext.getValue(cobis.constant.USER_NAME);
            } else {
                $scope.vc.args.user = "UserOutContainer";
            }
            $scope.vc.customDialogParameters = $scope.customDialogParameters;
            $scope.vc.args.channel = $location.search().channel;
            $scope.vc.metadata = {
                taskPk: {
                    moduleId: 'MMZJB',
                    subModuleId: 'SSMMJ',
                    taskId: 'T_MMZJBJPYGFBPO_294',
                    version: '1.0.0',
                    user: $scope.vc.args.user
                },
                entityNames: {
                    Cliente: "Cliente",
                    FiltroBusquedaPersona: "FiltroBusquedaPersona",
                    Persona: "Persona"
                },
                entities: {
                    Cliente: {
                        apellido: 'AT31_APELLIOD689',
                        nombre: 'AT43_NOMBREIW689',
                        idCliente: 'AT45_IDCLIEEE689',
                        nacionalidad: 'AT49_NACIONDL689',
                        telefono: 'AT61_TELEFOON689',
                        cedula: 'AT80_CEDULAXG689',
                        _pks: [],
                        _entityId: 'EN_CLIENTEXN_689',
                        _entityVersion: '1.0.0',
                        _transient: false
                    },
                    FiltroBusquedaPersona: {
                        filtro: 'AT53_FILTRONL224',
                        tipo: 'AT90_TIPOBHNM224',
                        _pks: [],
                        _entityId: 'EN_FILTROBRU_224',
                        _entityVersion: '1.0.0',
                        _transient: false
                    },
                    Persona: {
                        idPersona: 'AT24_IDPERSAN537',
                        apellido: 'AT33_APELLIDD537',
                        nombreC: 'AT46_NOMBRECC537',
                        nombre: 'AT46_NOMBRELV537',
                        telefono: 'AT56_TELEFOOO537',
                        sexo: 'AT66_SEXOXTUC537',
                        apellidoC: 'AT80_APELLIOD537',
                        estado: 'AT97_ESTADOUB537',
                        _pks: [],
                        _entityId: 'EN_PERSONAHF_537',
                        _entityVersion: '1.0.0',
                        _transient: false
                    }
                },
                relations: []
            };
            $scope.vc.queryProperties = {};
            $scope.vc.queryProperties.Q_CLIEENNT_KK23 = {
                autoCrud: false
            };
            $scope.vc.getRequestQuery_Q_CLIEENNT_KK23 = function() {
                var parametersAux = {};
                if ($.isEmptyObject($scope.vc.queries.Q_CLIEENNT_KK23_filters)) {
                    parametersAux = {};
                } else {
                    var filters = $scope.vc.queries.Q_CLIEENNT_KK23_filters;
                    parametersAux = {};
                }
                return {
                    mainEntityPk: {
                        entityId: 'EN_CLIENTEXN_689',
                        version: '1.0.0'
                    },
                    queryPk: {
                        queryId: 'Q_CLIEENNT_KK23',
                        version: '1.0.0'
                    },
                    parameters: parametersAux,
                    filters: {},
                    updateParameters: function() {}
                }
            };
            $scope.vc.queries.Q_CLIEENNT_KK23_filters = {};
            $scope.vc.queryProperties.Q_PERSANOO_FF85 = {
                autoCrud: false
            };
            $scope.vc.getRequestQuery_Q_PERSANOO_FF85 = function() {
                var parametersAux = {};
                if ($.isEmptyObject($scope.vc.queries.Q_PERSANOO_FF85_filters)) {
                    parametersAux = {};
                } else {
                    var filters = $scope.vc.queries.Q_PERSANOO_FF85_filters;
                    parametersAux = {};
                }
                return {
                    mainEntityPk: {
                        entityId: 'EN_PERSONAHF_537',
                        version: '1.0.0'
                    },
                    queryPk: {
                        queryId: 'Q_PERSANOO_FF85',
                        version: '1.0.0'
                    },
                    parameters: parametersAux,
                    filters: {},
                    updateParameters: function() {}
                }
            };
            $scope.vc.queries.Q_PERSANOO_FF85_filters = {};
            var defaultValues = {
                Cliente: {},
                FiltroBusquedaPersona: {},
                Persona: {}
            };
            $scope.vc.channelDefaultValues = function(entityName, attributeName, valueIfNotExist) {
                var channel = $scope.vc.args.channel;
                for (var en in defaultValues) {
                    if (defaultValues.hasOwnProperty(en) && en === entityName) {
                        for (var att in defaultValues[en]) {
                            if (defaultValues[en].hasOwnProperty(att) && att === attributeName) {
                                for (var ch in defaultValues[en][att]) {
                                    if (defaultValues[en][att].hasOwnProperty(ch) && ch === channel) {
                                        return defaultValues[en][att][ch];
                                    }
                                }
                            }
                        }
                    }
                }
                if (typeof valueIfNotExist !== "undefined") {
                    return valueIfNotExist;
                } else {
                    return null;
                }
            };
            $scope.vc.temporarySave = function() {
                var modelo = $scope.vc.cleanData($scope.vc.model);
                var data = {
                    model: modelo,
                    trackers: $scope.vc.trackers,
                    temporaryStorePK: $scope.vc.metadata.taskPk
                };
                $scope.vc.execute("temporarySave", VC_FILTROAUIP_552294, data, function() {});
            };
            $scope.vc.temporaryRead = function() {
                if (page.hasTemporaryDataSupport) {
                    var data = {
                        model: $scope.vc.model,
                        temporaryStorePK: $scope.vc.metadata.taskPk
                    };
                    return $scope.vc.executeService("readTemporaryData", VC_FILTROAUIP_552294, data).then(

                    function(response) {
                        var result = $scope.vc.processTemporaryResponse(response);
                        if (result) {
                            $scope.vc.execute("deleteTemporaryData", VC_FILTROAUIP_552294, data, function() {});
                            $scope.vc.crud.addTrackers($scope.vc.model);
                        }
                        page.hasTemporaryData = result;
                        page.ejecTemporaryData = response.success;
                        return page;
                    });
                } else {
                    page.ejecTemporaryData = false;
                    page.hasTemporaryData = false;
                    return page;
                }
            };
            $scope.vc.viewState.keyDown = function(e) {
                dsgnrUtils.container.validateOnEnter(e, $scope.vc);
            };
            $scope.vc.viewState.VC_FILTROAUIP_552294 = {
                style: []
            };
            $scope.vc.model.FiltroBusquedaPersona = {
                filtro: $scope.vc.channelDefaultValues("FiltroBusquedaPersona", "filtro"),
                tipo: $scope.vc.channelDefaultValues("FiltroBusquedaPersona", "tipo")
            };
            //ViewState - Group: Group1223
            $scope.vc.createViewState({
                id: "G_FILTROKHQD_723328",
                hasId: true,
                componentStyle: [],
                label: 'Group1223',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Entity: FiltroBusquedaPersona, Attribute: filtro
            $scope.vc.createViewState({
                id: "VA_FILTROUMFQUZEUJ_547328",
                componentStyle: [],
                label: "MMZJB.LBL_MMZJB_FILTROSPO_66051",
                validationCode: 0,
                readOnly: designer.constants.mode.Query,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All,
                isComboBox: true
            });
            $scope.vc.catalogs.VA_FILTROUMFQUZEUJ_547328 = new kendo.data.DataSource({
                transport: {
                    read: function(options) {
                        var data = [{
                            code: 'PE',
                            value: 'Persona'
                        }, {
                            code: 'CL',
                            value: 'Cliente'
                        }];
                        options.success(data);
                        $scope.vc.setComboBoxDefaultValue("VA_FILTROUMFQUZEUJ_547328", true, data[0], 'code', data);
                        $scope.vc.setEnableAndReadonlyStatus("VA_FILTROUMFQUZEUJ_547328");
                    }
                },
                requestStart: function(e) {
                    $scope.vc.requestStartRead(e, "VA_FILTROUMFQUZEUJ_547328", null);
                },
                serverFiltering: true,
                schema: {
                    model: {
                        id: "code"
                    }
                }
            });
            $scope.vc.createViewState({
                id: "VA_VAIMAGEBUTTONNN_292328",
                componentStyle: [],
                imageId: "fa fa-search",
                label: '',
                validationCode: 0,
                readOnly: designer.constants.mode.None,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Group: Group1120
            $scope.vc.createViewState({
                id: "G_FILTROOPTP_257328",
                hasId: true,
                componentStyle: [],
                label: 'Group1120',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            $scope.vc.types.Persona = kendo.data.Model.define({
                id: "dsgnrId",
                fields: {
                    dsgnrId: {
                        type: "string"
                    },
                    trackId: {
                        type: "string"
                    },
                    nombre: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Persona", "nombre", '')
                    },
                    nombreC: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Persona", "nombreC", '')
                    },
                    sexo: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Persona", "sexo", '')
                    },
                    estado: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Persona", "estado", '')
                    },
                    apellidoC: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Persona", "apellidoC", '')
                    },
                    apellido: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Persona", "apellido", '')
                    },
                    telefono: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Persona", "telefono", '')
                    },
                    idPersona: {
                        type: "number",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Persona", "idPersona", 0)
                    }
                }
            });
            $scope.vc.model.Persona = new kendo.data.DataSource({
                transport: {
                    read: function(options) {
                        var promise = false;
                        var isRefresh = (angular.isDefined(options.data) && angular.isDefined(options.data.refresh));
                        if (isRefresh || !designer.enums.hasFlag(designer.constants.mode.Insert, $scope.vc.mode)) {
                            var queryId = 'Q_PERSANOO_FF85';
                            var queryRequest = $scope.vc.getRequestQuery_Q_PERSANOO_FF85();
                            if (queryId && queryRequest) {
                                var queryLoaded = queryRequest.loaded;
                                if (angular.isUndefined(queryLoaded) || isRefresh === true) {
                                    queryRequest.loaded = true;
                                    queryRequest.updateParameters();
                                    promise = true;
                                    $scope.vc.executeQuery(
                                        'QV_GV85_LBM45',
                                    queryRequest,
                                    queryRequest.mainEntityPk.entityId,
                                    true,

                                    function(response) {
                                        if (response.success) {
                                            var result = response.data['RESULT' + queryId];
                                            if (angular.isUndefined(result)) {
                                                result = [];
                                            }
                                            if (angular.isDefined(result) && angular.isArray(result)) {
                                                options.success(result);
                                            } else {
                                                options.success([]);
                                            }
                                        } else {
                                            options.error([]);
                                        }
                                    }, (function() {
                                        var queryOptions = options.data;
                                        var queryView = {
                                            'allowPaging': false,
                                            'pageSize': 0
                                        };

                                        function config(queryOptions, queryView) {
                                            var result = undefined;
                                            if (queryView.allowPaging === true) {
                                                result = {};
                                                if (angular.isDefined(queryOptions.appendRecords) && queryOptions.appendRecords === true) {
                                                    result.appendRecords = true;
                                                }
                                                result.pageSize = queryView.pageSize;
                                            }
                                            return result;
                                        }
                                        return config(queryOptions, queryView);
                                    }()));
                                }
                            }
                        }
                        if (promise === false) {
                            options.error({
                                xhr: {}
                            });
                        }
                    },
                    create: function(options) {
                        var model = options.data;
                        model.dsgnrId = designer.utils.uuid();
                        options.success(model);
                    },
                    update: function(options) {
                        var model = options.data;
                        options.success(model);
                    },
                    destroy: function(options) {
                        var model = options.data;
                        options.success(model);
                    }
                },
                schema: {
                    model: $scope.vc.types.Persona
                },
                aggregate: [],
                error: function(e) {
                    if (e.xhr.message && e.xhr.message === 'DeletingError') {
                        $("#QV_GV85_LBM45").data("kendoExtGrid").cancelChanges();
                    }
                }
            });
            $scope.vc.queries.Q_PERSANOO_FF85 = $scope.vc.model.Persona;
            $scope.vc.trackers.Persona = new $scope.vc.crud.DataSourceTracker(
            $scope.vc.metadata.entities.Persona);
            $scope.vc.model.Persona.bind('change', function(e) {
                $scope.vc.trackers.Persona.track(e);
            });
            $scope.vc.grids.QV_GV85_LBM45 = {};
            $scope.vc.grids.QV_GV85_LBM45.queryId = 'Q_PERSANOO_FF85';
            $scope.vc.viewState.QV_GV85_LBM45 = {
                style: []
            };
            $scope.vc.viewState.QV_GV85_LBM45.column = {};
            $scope.vc.grids.QV_GV85_LBM45.editable = {
                mode: 'inline',
                confirmation: false
            };
            $scope.vc.grids.QV_GV85_LBM45.events = {
                customRowClick: function(e, controlId, entity, idGrid, commandName) {
                    var grid = $scope.vc.getElementGrid(idGrid);
                    var dataItem = grid.dataItem($(e.currentTarget).closest("tr"));
                    var args = {
                        rowData: dataItem,
                        rowIndex: grid.dataSource.indexOf(dataItem),
                        nameEntityGrid: entity,
                        refreshData: false,
                        stopPropagation: false,
                        commandName: commandName
                    };
                    $scope.vc.executeGridRowCommand(controlId, args);
                    if (args.refreshData) {
                        grid.refresh();
                    }
                    if (args.stopPropagation) {
                        e.stopImmediatePropagation();
                        e.stopPropagation();
                    }
                },
                cancel: function(e) {
                    $scope.vc.trackers.Persona.cancelTrackedChanges(e.model);
                },
                edit: function(e) {
                    $scope.vc.grids.QV_GV85_LBM45.selectedRow = e.model;
                    var commandCell = $scope.vc.getCommandCellData(e.container);
                    var titleUpdate = $filter('translate')('DSGNR.SYS_DSGNR_LBLACEPT0_00007');
                    var titleCancel = $filter('translate')('DSGNR.SYS_DSGNR_LBLCANCEL_00006');
                    commandCell.html("<a class='btn btn-default k-grid-update cb-row-image-button' onmousedown='this.focus()' title='" + titleUpdate + "' href='#'><span class='fa fa-check-circle'></span></a><a class='btn btn-default k-grid-cancel cb-row-image-button' title='" + titleCancel + "' href='#'><span class='fa fa-times-circle'></span></a>");
                    $scope.vc.validateForm();
                },
                dataBound: function(e) {
                    var index;
                    var grid = e.sender;
                    $scope.vc.gridDataBound("QV_GV85_LBM45", false, grid);
                    $scope.vc.hideShowColumns("QV_GV85_LBM45", grid);
                    var dataView = null;
                    dataView = this.dataSource.view();
                    var styleName, iStyle;
                    for (var i = 0; i < dataView.length; i++) {
                        if (typeof $scope.vc.viewState.QV_GV85_LBM45.rows[dataView[i].uid] != "undefined") {
                            for (iStyle = 0; iStyle < $scope.vc.viewState.QV_GV85_LBM45.rows[dataView[i].uid].style.length; iStyle++) {
                                styleName = $scope.vc.viewState.QV_GV85_LBM45.rows[dataView[i].uid].style[iStyle];
                                if ($("#QV_GV85_LBM45 tbody").find("tr[data-uid=" + dataView[i].uid + "]").hasClass(styleName) === false) {
                                    $("#QV_GV85_LBM45 tbody").find("tr[data-uid=" + dataView[i].uid + "]").addClass(styleName);
                                }
                            }
                        }
                    }
                }
            };
            //Comandos de registros del Grid
            $scope.vc.grids.QV_GV85_LBM45.columns = [];
            //Registros de fila del Grid
            $scope.vc.viewState.QV_GV85_LBM45.rows = [];
            //Controles de edicion en linea del Grid
            $scope.vc.viewState.QV_GV85_LBM45.column.nombre = {
                title: 'nombre',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXBLP_124328',
                element: []
            };
            $scope.vc.grids.QV_GV85_LBM45.AT46_NOMBRELV537 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_GV85_LBM45.column.nombre.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXBLP_124328",
                        'data-validation-code': "{{vc.viewState.QV_GV85_LBM45.column.nombre.validationCode}}",
                        'type': "text",
                        'class': "k-textbox",
                        'maxlength': 30,
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_GV85_LBM45.column.nombre.style"
                    });
                    textInput.appendTo(container);
                }
            };
            $scope.vc.viewState.QV_GV85_LBM45.column.nombreC = {
                title: 'nombreC',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXZAP_700328',
                element: []
            };
            $scope.vc.grids.QV_GV85_LBM45.AT46_NOMBRECC537 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_GV85_LBM45.column.nombreC.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXZAP_700328",
                        'data-validation-code': "{{vc.viewState.QV_GV85_LBM45.column.nombreC.validationCode}}",
                        'type': "text",
                        'class': "k-textbox",
                        'maxlength': 30,
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_GV85_LBM45.column.nombreC.style"
                    });
                    textInput.appendTo(container);
                }
            };
            $scope.vc.viewState.QV_GV85_LBM45.column.sexo = {
                title: 'sexo',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXWRO_143328',
                element: []
            };
            $scope.vc.grids.QV_GV85_LBM45.AT66_SEXOXTUC537 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_GV85_LBM45.column.sexo.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXWRO_143328",
                        'data-validation-code': "{{vc.viewState.QV_GV85_LBM45.column.sexo.validationCode}}",
                        'type': "text",
                        'class': "k-textbox",
                        'maxlength': 30,
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_GV85_LBM45.column.sexo.style"
                    });
                    textInput.appendTo(container);
                }
            };
            $scope.vc.viewState.QV_GV85_LBM45.column.estado = {
                title: 'estado',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXJIE_526328',
                element: []
            };
            $scope.vc.grids.QV_GV85_LBM45.AT97_ESTADOUB537 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_GV85_LBM45.column.estado.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXJIE_526328",
                        'data-validation-code': "{{vc.viewState.QV_GV85_LBM45.column.estado.validationCode}}",
                        'type': "text",
                        'class': "k-textbox",
                        'maxlength': 30,
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_GV85_LBM45.column.estado.style"
                    });
                    textInput.appendTo(container);
                }
            };
            $scope.vc.viewState.QV_GV85_LBM45.column.apellidoC = {
                title: 'apellidoC',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXSOZ_585328',
                element: []
            };
            $scope.vc.grids.QV_GV85_LBM45.AT80_APELLIOD537 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_GV85_LBM45.column.apellidoC.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXSOZ_585328",
                        'data-validation-code': "{{vc.viewState.QV_GV85_LBM45.column.apellidoC.validationCode}}",
                        'type': "text",
                        'class': "k-textbox",
                        'maxlength': 30,
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_GV85_LBM45.column.apellidoC.style"
                    });
                    textInput.appendTo(container);
                }
            };
            $scope.vc.viewState.QV_GV85_LBM45.column.apellido = {
                title: 'apellido',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXEZY_976328',
                element: []
            };
            $scope.vc.grids.QV_GV85_LBM45.AT33_APELLIDD537 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_GV85_LBM45.column.apellido.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXEZY_976328",
                        'data-validation-code': "{{vc.viewState.QV_GV85_LBM45.column.apellido.validationCode}}",
                        'type': "text",
                        'class': "k-textbox",
                        'maxlength': 30,
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_GV85_LBM45.column.apellido.style"
                    });
                    textInput.appendTo(container);
                }
            };
            $scope.vc.viewState.QV_GV85_LBM45.column.telefono = {
                title: 'telefono',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXORY_487328',
                element: []
            };
            $scope.vc.grids.QV_GV85_LBM45.AT56_TELEFOOO537 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_GV85_LBM45.column.telefono.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXORY_487328",
                        'data-validation-code': "{{vc.viewState.QV_GV85_LBM45.column.telefono.validationCode}}",
                        'type': "text",
                        'class': "k-textbox",
                        'maxlength': 30,
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_GV85_LBM45.column.telefono.style"
                    });
                    textInput.appendTo(container);
                }
            };
            $scope.vc.viewState.QV_GV85_LBM45.column.idPersona = {
                title: 'idPersona',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                format: "n0",
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXKAW_133328',
                element: []
            };
            $scope.vc.grids.QV_GV85_LBM45.AT24_IDPERSAN537 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_GV85_LBM45.column.idPersona.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXKAW_133328",
                        'data-validation-code': "{{vc.viewState.QV_GV85_LBM45.column.idPersona.validationCode}}",
                        'kendo-numeric-text-box': "",
                        'datatypes-Limit': "N",
                        'k-spinners': "false",
                        'k-step': "0",
                        'k-format': "vc.viewState.QV_GV85_LBM45.column.idPersona.format",
                        'k-decimals': "vc.viewState.QV_GV85_LBM45.column.idPersona.decimals",
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_GV85_LBM45.column.idPersona.style"
                    });
                    textInput.appendTo(container);
                }
            };
            //Creacion de columnas del Grid
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_GV85_LBM45.columns.push({
                    field: 'nombre',
                    title: '{{vc.viewState.QV_GV85_LBM45.column.nombre.title|translate:vc.viewState.QV_GV85_LBM45.column.nombre.titleArgs}}',
                    width: $scope.vc.viewState.QV_GV85_LBM45.column.nombre.width,
                    format: $scope.vc.viewState.QV_GV85_LBM45.column.nombre.format,
                    editor: $scope.vc.grids.QV_GV85_LBM45.AT46_NOMBRELV537.control,
                    template: "<span ng-class='vc.viewState.QV_GV85_LBM45.column.nombre.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.nombre, \"QV_GV85_LBM45\", \"nombre\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_GV85_LBM45.column.nombre.style",
                        "title": "{{vc.viewState.QV_GV85_LBM45.column.nombre.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_GV85_LBM45.column.nombre.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_GV85_LBM45.columns.push({
                    field: 'nombreC',
                    title: '{{vc.viewState.QV_GV85_LBM45.column.nombreC.title|translate:vc.viewState.QV_GV85_LBM45.column.nombreC.titleArgs}}',
                    width: $scope.vc.viewState.QV_GV85_LBM45.column.nombreC.width,
                    format: $scope.vc.viewState.QV_GV85_LBM45.column.nombreC.format,
                    editor: $scope.vc.grids.QV_GV85_LBM45.AT46_NOMBRECC537.control,
                    template: "<span ng-class='vc.viewState.QV_GV85_LBM45.column.nombreC.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.nombreC, \"QV_GV85_LBM45\", \"nombreC\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_GV85_LBM45.column.nombreC.style",
                        "title": "{{vc.viewState.QV_GV85_LBM45.column.nombreC.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_GV85_LBM45.column.nombreC.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_GV85_LBM45.columns.push({
                    field: 'sexo',
                    title: '{{vc.viewState.QV_GV85_LBM45.column.sexo.title|translate:vc.viewState.QV_GV85_LBM45.column.sexo.titleArgs}}',
                    width: $scope.vc.viewState.QV_GV85_LBM45.column.sexo.width,
                    format: $scope.vc.viewState.QV_GV85_LBM45.column.sexo.format,
                    editor: $scope.vc.grids.QV_GV85_LBM45.AT66_SEXOXTUC537.control,
                    template: "<span ng-class='vc.viewState.QV_GV85_LBM45.column.sexo.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.sexo, \"QV_GV85_LBM45\", \"sexo\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_GV85_LBM45.column.sexo.style",
                        "title": "{{vc.viewState.QV_GV85_LBM45.column.sexo.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_GV85_LBM45.column.sexo.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_GV85_LBM45.columns.push({
                    field: 'estado',
                    title: '{{vc.viewState.QV_GV85_LBM45.column.estado.title|translate:vc.viewState.QV_GV85_LBM45.column.estado.titleArgs}}',
                    width: $scope.vc.viewState.QV_GV85_LBM45.column.estado.width,
                    format: $scope.vc.viewState.QV_GV85_LBM45.column.estado.format,
                    editor: $scope.vc.grids.QV_GV85_LBM45.AT97_ESTADOUB537.control,
                    template: "<span ng-class='vc.viewState.QV_GV85_LBM45.column.estado.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.estado, \"QV_GV85_LBM45\", \"estado\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_GV85_LBM45.column.estado.style",
                        "title": "{{vc.viewState.QV_GV85_LBM45.column.estado.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_GV85_LBM45.column.estado.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_GV85_LBM45.columns.push({
                    field: 'apellidoC',
                    title: '{{vc.viewState.QV_GV85_LBM45.column.apellidoC.title|translate:vc.viewState.QV_GV85_LBM45.column.apellidoC.titleArgs}}',
                    width: $scope.vc.viewState.QV_GV85_LBM45.column.apellidoC.width,
                    format: $scope.vc.viewState.QV_GV85_LBM45.column.apellidoC.format,
                    editor: $scope.vc.grids.QV_GV85_LBM45.AT80_APELLIOD537.control,
                    template: "<span ng-class='vc.viewState.QV_GV85_LBM45.column.apellidoC.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.apellidoC, \"QV_GV85_LBM45\", \"apellidoC\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_GV85_LBM45.column.apellidoC.style",
                        "title": "{{vc.viewState.QV_GV85_LBM45.column.apellidoC.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_GV85_LBM45.column.apellidoC.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_GV85_LBM45.columns.push({
                    field: 'apellido',
                    title: '{{vc.viewState.QV_GV85_LBM45.column.apellido.title|translate:vc.viewState.QV_GV85_LBM45.column.apellido.titleArgs}}',
                    width: $scope.vc.viewState.QV_GV85_LBM45.column.apellido.width,
                    format: $scope.vc.viewState.QV_GV85_LBM45.column.apellido.format,
                    editor: $scope.vc.grids.QV_GV85_LBM45.AT33_APELLIDD537.control,
                    template: "<span ng-class='vc.viewState.QV_GV85_LBM45.column.apellido.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.apellido, \"QV_GV85_LBM45\", \"apellido\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_GV85_LBM45.column.apellido.style",
                        "title": "{{vc.viewState.QV_GV85_LBM45.column.apellido.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_GV85_LBM45.column.apellido.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_GV85_LBM45.columns.push({
                    field: 'telefono',
                    title: '{{vc.viewState.QV_GV85_LBM45.column.telefono.title|translate:vc.viewState.QV_GV85_LBM45.column.telefono.titleArgs}}',
                    width: $scope.vc.viewState.QV_GV85_LBM45.column.telefono.width,
                    format: $scope.vc.viewState.QV_GV85_LBM45.column.telefono.format,
                    editor: $scope.vc.grids.QV_GV85_LBM45.AT56_TELEFOOO537.control,
                    template: "<span ng-class='vc.viewState.QV_GV85_LBM45.column.telefono.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.telefono, \"QV_GV85_LBM45\", \"telefono\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_GV85_LBM45.column.telefono.style",
                        "title": "{{vc.viewState.QV_GV85_LBM45.column.telefono.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_GV85_LBM45.column.telefono.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_GV85_LBM45.columns.push({
                    field: 'idPersona',
                    title: '{{vc.viewState.QV_GV85_LBM45.column.idPersona.title|translate:vc.viewState.QV_GV85_LBM45.column.idPersona.titleArgs}}',
                    width: $scope.vc.viewState.QV_GV85_LBM45.column.idPersona.width,
                    format: $scope.vc.viewState.QV_GV85_LBM45.column.idPersona.format,
                    editor: $scope.vc.grids.QV_GV85_LBM45.AT24_IDPERSAN537.control,
                    template: "<span ng-class='vc.viewState.QV_GV85_LBM45.column.idPersona.element[dataItem.dsgnrId].style' ng-bind='(vc.getStringColumnFormat)?vc.getStringColumnFormat(dataItem.idPersona, \"QV_GV85_LBM45\", \"idPersona\"):kendo.toString(#=idPersona#, vc.viewState.QV_GV85_LBM45.column.idPersona.format)'></span>",
                    attributes: {
                        "class": "text-right",
                        "ng-class": "vc.viewState.QV_GV85_LBM45.column.idPersona.style",
                        "title": "{{vc.viewState.QV_GV85_LBM45.column.idPersona.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_GV85_LBM45.column.idPersona.hidden
                });
            }
            $scope.vc.viewState.QV_GV85_LBM45.column.edit = {
                element: []
            };
            $scope.vc.viewState.QV_GV85_LBM45.column["delete"] = {
                element: []
            };
            $scope.vc.viewState.QV_GV85_LBM45.column.cmdEdition = {};
            $scope.vc.viewState.QV_GV85_LBM45.column.cmdEdition.hidden = (!designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode)) ? false : true;
            $scope.vc.grids.QV_GV85_LBM45.columns.push({
                field: 'cmdEdition',
                title: ' ',
                command: [{
                    name: "edit",
                    text: "{{'DSGNR.SYS_DSGNR_LBLEDIT00_00005'|translate}}",
                    cssMap: "{'btn': true, 'btn-default': true, 'cb-row-image-button': true" + ", 'k-grid-edit': !vc.viewState.G_FILTROOPTP_257328.disabled}",
                    template: "<a ng-class='vc.getCssClass(\"edit\", " + "vc.viewState.QV_GV85_LBM45.column.edit.element[dataItem.uid].style, #:cssMap#, vc.viewState.QV_GV85_LBM45.column.edit.element[dataItem.dsgnrId].style)' " + "title=\"{{'DSGNR.SYS_DSGNR_LBLEDIT00_00005'|translate}}\" " + "ng-disabled = (vc.viewState.G_FILTROOPTP_257328.disabled==true?true:false) " + "href='\\#'>" + "<span class='fa fa-pencil'></span>" + "</a>"
                }, {
                    name: "destroy",
                    text: "{{'DSGNR.SYS_DSGNR_LBLDELETE_00008'|translate}}",
                    cssMap: "{'btn': true, 'btn-default': true, 'cb-row-image-button': true" + ", 'k-grid-delete': !vc.viewState.G_FILTROOPTP_257328.disabled}",
                    template: "<a ng-class='vc.getCssClass(\"destroy\", " + "vc.viewState.QV_GV85_LBM45.column.delete.element[dataItem.uid].style, #:cssMap#, vc.viewState.QV_GV85_LBM45.column.delete.element[dataItem.dsgnrId].style)' " + "title=\"{{'DSGNR.SYS_DSGNR_LBLDELETE_00008'|translate}}\" " + "ng-disabled = (vc.viewState.G_FILTROOPTP_257328.disabled==true?true:false) " + ">" + "<span class='fa fa-times'></span>" + "</a>"
                }],
                attributes: {
                    "class": "btn-toolbar"
                },
                hidden: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode) === true ? true : $scope.vc.viewState.QV_GV85_LBM45.column.cmdEdition.hidden,
                width: Number(sessionStorage.columnSize) || 100
            });
            $scope.vc.viewState.QV_GV85_LBM45.toolbar = {
                create: {
                    visible: !designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode)
                }
            }
            $scope.vc.grids.QV_GV85_LBM45.toolbar = [{
                "name": "create",
                "text": "",
                "template": "<button class = 'btn btn-default k-grid-add cb-grid-button' " + "ng-if = 'vc.viewState.QV_GV85_LBM45.toolbar.create.visible' " + "ng-disabled = 'vc.viewState.G_FILTROOPTP_257328.disabled?true:false'" + "title = \"{{'DSGNR.SYS_DSGNR_LBLNEW000_00013'|translate}}\" >" + "<span class='fa fa-plus'></span>{{'DSGNR.SYS_DSGNR_LBLNEW000_00013'|translate}}</button>"
            }];
            //ViewState - Group: Group2894
            $scope.vc.createViewState({
                id: "G_FILTROFOVH_982328",
                hasId: true,
                componentStyle: [],
                label: 'Group2894',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            $scope.vc.types.Cliente = kendo.data.Model.define({
                id: "dsgnrId",
                fields: {
                    dsgnrId: {
                        type: "string"
                    },
                    trackId: {
                        type: "string"
                    },
                    telefono: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Cliente", "telefono", '')
                    },
                    nacionalidad: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Cliente", "nacionalidad", '')
                    },
                    apellido: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Cliente", "apellido", '')
                    },
                    cedula: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Cliente", "cedula", '')
                    },
                    nombre: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Cliente", "nombre", '')
                    },
                    idCliente: {
                        type: "number",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Cliente", "idCliente", 0)
                    }
                }
            });
            $scope.vc.model.Cliente = new kendo.data.DataSource({
                transport: {
                    read: function(options) {
                        var promise = false;
                        var isRefresh = (angular.isDefined(options.data) && angular.isDefined(options.data.refresh));
                        if (isRefresh || !designer.enums.hasFlag(designer.constants.mode.Insert, $scope.vc.mode)) {
                            var queryId = 'Q_CLIEENNT_KK23';
                            var queryRequest = $scope.vc.getRequestQuery_Q_CLIEENNT_KK23();
                            if (queryId && queryRequest) {
                                var queryLoaded = queryRequest.loaded;
                                if (angular.isUndefined(queryLoaded) || isRefresh === true) {
                                    queryRequest.loaded = true;
                                    queryRequest.updateParameters();
                                    promise = true;
                                    $scope.vc.executeQuery(
                                        'QV_TM23_NKO34',
                                    queryRequest,
                                    queryRequest.mainEntityPk.entityId,
                                    true,

                                    function(response) {
                                        if (response.success) {
                                            var result = response.data['RESULT' + queryId];
                                            if (angular.isUndefined(result)) {
                                                result = [];
                                            }
                                            if (angular.isDefined(result) && angular.isArray(result)) {
                                                options.success(result);
                                            } else {
                                                options.success([]);
                                            }
                                        } else {
                                            options.error([]);
                                        }
                                    }, (function() {
                                        var queryOptions = options.data;
                                        var queryView = {
                                            'allowPaging': false,
                                            'pageSize': 0
                                        };

                                        function config(queryOptions, queryView) {
                                            var result = undefined;
                                            if (queryView.allowPaging === true) {
                                                result = {};
                                                if (angular.isDefined(queryOptions.appendRecords) && queryOptions.appendRecords === true) {
                                                    result.appendRecords = true;
                                                }
                                                result.pageSize = queryView.pageSize;
                                            }
                                            return result;
                                        }
                                        return config(queryOptions, queryView);
                                    }()));
                                }
                            }
                        }
                        if (promise === false) {
                            options.error({
                                xhr: {}
                            });
                        }
                    },
                    create: function(options) {
                        var model = options.data;
                        model.dsgnrId = designer.utils.uuid();
                        options.success(model);
                    },
                    update: function(options) {
                        var model = options.data;
                        options.success(model);
                    },
                    destroy: function(options) {
                        var model = options.data;
                        options.success(model);
                    }
                },
                schema: {
                    model: $scope.vc.types.Cliente
                },
                aggregate: [],
                error: function(e) {
                    if (e.xhr.message && e.xhr.message === 'DeletingError') {
                        $("#QV_TM23_NKO34").data("kendoExtGrid").cancelChanges();
                    }
                }
            });
            $scope.vc.queries.Q_CLIEENNT_KK23 = $scope.vc.model.Cliente;
            $scope.vc.trackers.Cliente = new $scope.vc.crud.DataSourceTracker(
            $scope.vc.metadata.entities.Cliente);
            $scope.vc.model.Cliente.bind('change', function(e) {
                $scope.vc.trackers.Cliente.track(e);
            });
            $scope.vc.grids.QV_TM23_NKO34 = {};
            $scope.vc.grids.QV_TM23_NKO34.queryId = 'Q_CLIEENNT_KK23';
            $scope.vc.viewState.QV_TM23_NKO34 = {
                style: []
            };
            $scope.vc.viewState.QV_TM23_NKO34.column = {};
            $scope.vc.grids.QV_TM23_NKO34.editable = {
                mode: 'inline',
                confirmation: false
            };
            $scope.vc.grids.QV_TM23_NKO34.events = {
                customRowClick: function(e, controlId, entity, idGrid, commandName) {
                    var grid = $scope.vc.getElementGrid(idGrid);
                    var dataItem = grid.dataItem($(e.currentTarget).closest("tr"));
                    var args = {
                        rowData: dataItem,
                        rowIndex: grid.dataSource.indexOf(dataItem),
                        nameEntityGrid: entity,
                        refreshData: false,
                        stopPropagation: false,
                        commandName: commandName
                    };
                    $scope.vc.executeGridRowCommand(controlId, args);
                    if (args.refreshData) {
                        grid.refresh();
                    }
                    if (args.stopPropagation) {
                        e.stopImmediatePropagation();
                        e.stopPropagation();
                    }
                },
                cancel: function(e) {
                    $scope.vc.trackers.Cliente.cancelTrackedChanges(e.model);
                },
                edit: function(e) {
                    $scope.vc.grids.QV_TM23_NKO34.selectedRow = e.model;
                    var commandCell = $scope.vc.getCommandCellData(e.container);
                    var titleUpdate = $filter('translate')('DSGNR.SYS_DSGNR_LBLACEPT0_00007');
                    var titleCancel = $filter('translate')('DSGNR.SYS_DSGNR_LBLCANCEL_00006');
                    commandCell.html("<a class='btn btn-default k-grid-update cb-row-image-button' onmousedown='this.focus()' title='" + titleUpdate + "' href='#'><span class='fa fa-check-circle'></span></a><a class='btn btn-default k-grid-cancel cb-row-image-button' title='" + titleCancel + "' href='#'><span class='fa fa-times-circle'></span></a>");
                    $scope.vc.validateForm();
                },
                dataBound: function(e) {
                    var index;
                    var grid = e.sender;
                    $scope.vc.gridDataBound("QV_TM23_NKO34", false, grid);
                    $scope.vc.hideShowColumns("QV_TM23_NKO34", grid);
                    var dataView = null;
                    dataView = this.dataSource.view();
                    var styleName, iStyle;
                    for (var i = 0; i < dataView.length; i++) {
                        if (typeof $scope.vc.viewState.QV_TM23_NKO34.rows[dataView[i].uid] != "undefined") {
                            for (iStyle = 0; iStyle < $scope.vc.viewState.QV_TM23_NKO34.rows[dataView[i].uid].style.length; iStyle++) {
                                styleName = $scope.vc.viewState.QV_TM23_NKO34.rows[dataView[i].uid].style[iStyle];
                                if ($("#QV_TM23_NKO34 tbody").find("tr[data-uid=" + dataView[i].uid + "]").hasClass(styleName) === false) {
                                    $("#QV_TM23_NKO34 tbody").find("tr[data-uid=" + dataView[i].uid + "]").addClass(styleName);
                                }
                            }
                        }
                    }
                }
            };
            //Comandos de registros del Grid
            $scope.vc.grids.QV_TM23_NKO34.columns = [];
            //Registros de fila del Grid
            $scope.vc.viewState.QV_TM23_NKO34.rows = [];
            //Controles de edicion en linea del Grid
            $scope.vc.viewState.QV_TM23_NKO34.column.telefono = {
                title: 'telefono',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXBLP_174328',
                element: []
            };
            $scope.vc.grids.QV_TM23_NKO34.AT61_TELEFOON689 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_TM23_NKO34.column.telefono.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXBLP_174328",
                        'data-validation-code': "{{vc.viewState.QV_TM23_NKO34.column.telefono.validationCode}}",
                        'type': "text",
                        'class': "k-textbox",
                        'maxlength': 30,
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_TM23_NKO34.column.telefono.style"
                    });
                    textInput.appendTo(container);
                }
            };
            $scope.vc.viewState.QV_TM23_NKO34.column.nacionalidad = {
                title: 'nacionalidad',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXFKW_480328',
                element: []
            };
            $scope.vc.grids.QV_TM23_NKO34.AT49_NACIONDL689 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_TM23_NKO34.column.nacionalidad.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXFKW_480328",
                        'data-validation-code': "{{vc.viewState.QV_TM23_NKO34.column.nacionalidad.validationCode}}",
                        'type': "text",
                        'class': "k-textbox",
                        'maxlength': 30,
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_TM23_NKO34.column.nacionalidad.style"
                    });
                    textInput.appendTo(container);
                }
            };
            $scope.vc.viewState.QV_TM23_NKO34.column.apellido = {
                title: 'apellido',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXPQH_614328',
                element: []
            };
            $scope.vc.grids.QV_TM23_NKO34.AT31_APELLIOD689 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_TM23_NKO34.column.apellido.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXPQH_614328",
                        'data-validation-code': "{{vc.viewState.QV_TM23_NKO34.column.apellido.validationCode}}",
                        'type': "text",
                        'class': "k-textbox",
                        'maxlength': 30,
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_TM23_NKO34.column.apellido.style"
                    });
                    textInput.appendTo(container);
                }
            };
            $scope.vc.viewState.QV_TM23_NKO34.column.cedula = {
                title: 'cedula',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXWMS_867328',
                element: []
            };
            $scope.vc.grids.QV_TM23_NKO34.AT80_CEDULAXG689 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_TM23_NKO34.column.cedula.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXWMS_867328",
                        'data-validation-code': "{{vc.viewState.QV_TM23_NKO34.column.cedula.validationCode}}",
                        'type': "text",
                        'class': "k-textbox",
                        'maxlength': 30,
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_TM23_NKO34.column.cedula.style"
                    });
                    textInput.appendTo(container);
                }
            };
            $scope.vc.viewState.QV_TM23_NKO34.column.nombre = {
                title: 'nombre',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXARD_403328',
                element: []
            };
            $scope.vc.grids.QV_TM23_NKO34.AT43_NOMBREIW689 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_TM23_NKO34.column.nombre.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXARD_403328",
                        'data-validation-code': "{{vc.viewState.QV_TM23_NKO34.column.nombre.validationCode}}",
                        'type': "text",
                        'class': "k-textbox",
                        'maxlength': 30,
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_TM23_NKO34.column.nombre.style"
                    });
                    textInput.appendTo(container);
                }
            };
            $scope.vc.viewState.QV_TM23_NKO34.column.idCliente = {
                title: 'idCliente',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                format: "n0",
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXFGM_421328',
                element: []
            };
            $scope.vc.grids.QV_TM23_NKO34.AT45_IDCLIEEE689 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_TM23_NKO34.column.idCliente.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXFGM_421328",
                        'data-validation-code': "{{vc.viewState.QV_TM23_NKO34.column.idCliente.validationCode}}",
                        'kendo-numeric-text-box': "",
                        'datatypes-Limit': "N",
                        'k-spinners': "false",
                        'k-step': "0",
                        'k-format': "vc.viewState.QV_TM23_NKO34.column.idCliente.format",
                        'k-decimals': "vc.viewState.QV_TM23_NKO34.column.idCliente.decimals",
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_TM23_NKO34.column.idCliente.style"
                    });
                    textInput.appendTo(container);
                }
            };
            //Creacion de columnas del Grid
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_TM23_NKO34.columns.push({
                    field: 'telefono',
                    title: '{{vc.viewState.QV_TM23_NKO34.column.telefono.title|translate:vc.viewState.QV_TM23_NKO34.column.telefono.titleArgs}}',
                    width: $scope.vc.viewState.QV_TM23_NKO34.column.telefono.width,
                    format: $scope.vc.viewState.QV_TM23_NKO34.column.telefono.format,
                    editor: $scope.vc.grids.QV_TM23_NKO34.AT61_TELEFOON689.control,
                    template: "<span ng-class='vc.viewState.QV_TM23_NKO34.column.telefono.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.telefono, \"QV_TM23_NKO34\", \"telefono\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_TM23_NKO34.column.telefono.style",
                        "title": "{{vc.viewState.QV_TM23_NKO34.column.telefono.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_TM23_NKO34.column.telefono.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_TM23_NKO34.columns.push({
                    field: 'nacionalidad',
                    title: '{{vc.viewState.QV_TM23_NKO34.column.nacionalidad.title|translate:vc.viewState.QV_TM23_NKO34.column.nacionalidad.titleArgs}}',
                    width: $scope.vc.viewState.QV_TM23_NKO34.column.nacionalidad.width,
                    format: $scope.vc.viewState.QV_TM23_NKO34.column.nacionalidad.format,
                    editor: $scope.vc.grids.QV_TM23_NKO34.AT49_NACIONDL689.control,
                    template: "<span ng-class='vc.viewState.QV_TM23_NKO34.column.nacionalidad.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.nacionalidad, \"QV_TM23_NKO34\", \"nacionalidad\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_TM23_NKO34.column.nacionalidad.style",
                        "title": "{{vc.viewState.QV_TM23_NKO34.column.nacionalidad.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_TM23_NKO34.column.nacionalidad.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_TM23_NKO34.columns.push({
                    field: 'apellido',
                    title: '{{vc.viewState.QV_TM23_NKO34.column.apellido.title|translate:vc.viewState.QV_TM23_NKO34.column.apellido.titleArgs}}',
                    width: $scope.vc.viewState.QV_TM23_NKO34.column.apellido.width,
                    format: $scope.vc.viewState.QV_TM23_NKO34.column.apellido.format,
                    editor: $scope.vc.grids.QV_TM23_NKO34.AT31_APELLIOD689.control,
                    template: "<span ng-class='vc.viewState.QV_TM23_NKO34.column.apellido.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.apellido, \"QV_TM23_NKO34\", \"apellido\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_TM23_NKO34.column.apellido.style",
                        "title": "{{vc.viewState.QV_TM23_NKO34.column.apellido.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_TM23_NKO34.column.apellido.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_TM23_NKO34.columns.push({
                    field: 'cedula',
                    title: '{{vc.viewState.QV_TM23_NKO34.column.cedula.title|translate:vc.viewState.QV_TM23_NKO34.column.cedula.titleArgs}}',
                    width: $scope.vc.viewState.QV_TM23_NKO34.column.cedula.width,
                    format: $scope.vc.viewState.QV_TM23_NKO34.column.cedula.format,
                    editor: $scope.vc.grids.QV_TM23_NKO34.AT80_CEDULAXG689.control,
                    template: "<span ng-class='vc.viewState.QV_TM23_NKO34.column.cedula.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.cedula, \"QV_TM23_NKO34\", \"cedula\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_TM23_NKO34.column.cedula.style",
                        "title": "{{vc.viewState.QV_TM23_NKO34.column.cedula.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_TM23_NKO34.column.cedula.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_TM23_NKO34.columns.push({
                    field: 'nombre',
                    title: '{{vc.viewState.QV_TM23_NKO34.column.nombre.title|translate:vc.viewState.QV_TM23_NKO34.column.nombre.titleArgs}}',
                    width: $scope.vc.viewState.QV_TM23_NKO34.column.nombre.width,
                    format: $scope.vc.viewState.QV_TM23_NKO34.column.nombre.format,
                    editor: $scope.vc.grids.QV_TM23_NKO34.AT43_NOMBREIW689.control,
                    template: "<span ng-class='vc.viewState.QV_TM23_NKO34.column.nombre.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.nombre, \"QV_TM23_NKO34\", \"nombre\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_TM23_NKO34.column.nombre.style",
                        "title": "{{vc.viewState.QV_TM23_NKO34.column.nombre.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_TM23_NKO34.column.nombre.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_TM23_NKO34.columns.push({
                    field: 'idCliente',
                    title: '{{vc.viewState.QV_TM23_NKO34.column.idCliente.title|translate:vc.viewState.QV_TM23_NKO34.column.idCliente.titleArgs}}',
                    width: $scope.vc.viewState.QV_TM23_NKO34.column.idCliente.width,
                    format: $scope.vc.viewState.QV_TM23_NKO34.column.idCliente.format,
                    editor: $scope.vc.grids.QV_TM23_NKO34.AT45_IDCLIEEE689.control,
                    template: "<span ng-class='vc.viewState.QV_TM23_NKO34.column.idCliente.element[dataItem.dsgnrId].style' ng-bind='(vc.getStringColumnFormat)?vc.getStringColumnFormat(dataItem.idCliente, \"QV_TM23_NKO34\", \"idCliente\"):kendo.toString(#=idCliente#, vc.viewState.QV_TM23_NKO34.column.idCliente.format)'></span>",
                    attributes: {
                        "class": "text-right",
                        "ng-class": "vc.viewState.QV_TM23_NKO34.column.idCliente.style",
                        "title": "{{vc.viewState.QV_TM23_NKO34.column.idCliente.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_TM23_NKO34.column.idCliente.hidden
                });
            }
            $scope.vc.viewState.QV_TM23_NKO34.column.edit = {
                element: []
            };
            $scope.vc.viewState.QV_TM23_NKO34.column["delete"] = {
                element: []
            };
            $scope.vc.viewState.QV_TM23_NKO34.column.cmdEdition = {};
            $scope.vc.viewState.QV_TM23_NKO34.column.cmdEdition.hidden = (!designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode)) ? false : true;
            $scope.vc.grids.QV_TM23_NKO34.columns.push({
                field: 'cmdEdition',
                title: ' ',
                command: [{
                    name: "edit",
                    text: "{{'DSGNR.SYS_DSGNR_LBLEDIT00_00005'|translate}}",
                    cssMap: "{'btn': true, 'btn-default': true, 'cb-row-image-button': true" + ", 'k-grid-edit': !vc.viewState.G_FILTROFOVH_982328.disabled}",
                    template: "<a ng-class='vc.getCssClass(\"edit\", " + "vc.viewState.QV_TM23_NKO34.column.edit.element[dataItem.uid].style, #:cssMap#, vc.viewState.QV_TM23_NKO34.column.edit.element[dataItem.dsgnrId].style)' " + "title=\"{{'DSGNR.SYS_DSGNR_LBLEDIT00_00005'|translate}}\" " + "ng-disabled = (vc.viewState.G_FILTROFOVH_982328.disabled==true?true:false) " + "href='\\#'>" + "<span class='fa fa-pencil'></span>" + "</a>"
                }, {
                    name: "destroy",
                    text: "{{'DSGNR.SYS_DSGNR_LBLDELETE_00008'|translate}}",
                    cssMap: "{'btn': true, 'btn-default': true, 'cb-row-image-button': true" + ", 'k-grid-delete': !vc.viewState.G_FILTROFOVH_982328.disabled}",
                    template: "<a ng-class='vc.getCssClass(\"destroy\", " + "vc.viewState.QV_TM23_NKO34.column.delete.element[dataItem.uid].style, #:cssMap#, vc.viewState.QV_TM23_NKO34.column.delete.element[dataItem.dsgnrId].style)' " + "title=\"{{'DSGNR.SYS_DSGNR_LBLDELETE_00008'|translate}}\" " + "ng-disabled = (vc.viewState.G_FILTROFOVH_982328.disabled==true?true:false) " + ">" + "<span class='fa fa-times'></span>" + "</a>"
                }],
                attributes: {
                    "class": "btn-toolbar"
                },
                hidden: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode) === true ? true : $scope.vc.viewState.QV_TM23_NKO34.column.cmdEdition.hidden,
                width: Number(sessionStorage.columnSize) || 100
            });
            $scope.vc.viewState.QV_TM23_NKO34.toolbar = {
                create: {
                    visible: !designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode)
                }
            }
            $scope.vc.grids.QV_TM23_NKO34.toolbar = [{
                "name": "create",
                "text": "",
                "template": "<button class = 'btn btn-default k-grid-add cb-grid-button' " + "ng-if = 'vc.viewState.QV_TM23_NKO34.toolbar.create.visible' " + "ng-disabled = 'vc.viewState.G_FILTROFOVH_982328.disabled?true:false'" + "title = \"{{'DSGNR.SYS_DSGNR_LBLNEW000_00013'|translate}}\" >" + "<span class='fa fa-plus'></span>{{'DSGNR.SYS_DSGNR_LBLNEW000_00013'|translate}}</button>"
            }];
            //ViewState - Command: Accept
            $scope.vc.createViewState({
                id: "T_MMZJBJPYGFBPO_294_ACCEPT",
                componentStyle: [],
                label: 'Accept',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Command: Cancel
            $scope.vc.createViewState({
                id: "T_MMZJBJPYGFBPO_294_CANCEL",
                componentStyle: [],
                label: 'Cancel',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            if ($scope.vc.parentVc) {
                $scope.vc.afterOpenGridDialog();
            }
        }
        $scope.isInvalid = function(form, field) {
            if (!field) {
                return false;
            }
            var submitted = $scope.vc.submitted[form.$name];
            return ((submitted || field.$dirty) && field.$invalid);
        };
        $scope._initPage_CRUDExecuteQueryEntities = function(page) {
            if (!designer.enums.hasFlag(designer.constants.mode.Insert, $scope.vc.mode)) {
                if (page.hasTemporaryDataSupport && page.ejecTemporaryData && !page.hasTemporaryData) {
                    return $scope.vc.CRUDExecuteQueryEntities(page);
                } else if (page.hasCRUDSupport) {
                    return $scope.vc.CRUDExecuteQueryEntities(page);
                } else {
                    return page;
                }
            } else {
                return page;
            }
        };
        $scope._initPage_InitializeTrackers = function(page) {
            $scope.vc.addChangeEvents($scope);
            $scope.vc.crud.addTrackers($scope.vc.model);
            return page;
        };
        $scope._initPage_ChangeInitData = function(page) {
            return $scope.vc.changeInitData(page, $scope.vc);
        };
        $scope._initPage_ProcessRender = function(page) {
            if (page.hasSearchRenderEvent) {
                $scope.vc.render('VC_FILTROAUIP_552294');
            }
            return page;
        };
        if ($scope.vc.isModal($scope) || $scope.vc.isDetailGrid($scope) || $scope.isDesignerInclude) {
            //para ventanas modales se usa ng-include con onload
            $scope.runLifeCycle = function() {
                var threadLifeCycle = $scope.vc.lifeCycle.prepareThread(page);
                if (threadLifeCycle) {
                    if (!$scope.isDesignerInclude) {
                        cobis.showMessageWindow.loading(true, "none");
                    }
                    $scope.vc.lifeCycle.run(page, threadLifeCycle, $scope);
                    cobis.showMessageWindow.loading(false);
                }
            };
        } else {
            //con ngView no funciona el $document.ready se cambia por $viewContentLoaded
            $scope.$on('$viewContentLoaded', function() {
                if ($scope.vc.loaded) {
                    //Si se esta regresando de otra pantalla
                    $scope.vc.addAfterInitDataFlags($scope);
                    $scope.vc.addChangeEvents($scope);
                    if (($scope.vc.hasOnCloseModalEvent && angular.isDefined($scope.vc.dialogParameters.autoSync) && $scope.vc.dialogParameters.autoSync === false) && ($scope.vc.dialogResponse || $scope.vc.customDialogResponse)) {
                        $scope.vc.onCloseModalEvent();
                    }
                    if ($scope.vc.dialogResponse || $scope.vc.customDialogResponse) {
                        $scope.vc.afterCloseGridDialog();
                    }
                    cobis.showMessageWindow.loading(false);
                } else {
                    //Si es la primera vez que se ejecuta la pantalla
                    var threadLifeCycle = $scope.vc.lifeCycle.prepareThread(page);
                    if (threadLifeCycle) {
                        $scope.vc.lifeCycle.run(page, threadLifeCycle, $scope);
                        cobis.showMessageWindow.loading(false);
                    }
                }
            });
        }
    }]);
}
if (typeof cobisMainModule === "undefined") {
    var cobisMainModule = cobis.createModule("VC_FILTROAUIP_552294", ["ngResource", "ngRoute", "kendo.directives", "ui.bootstrap", "oc.lazyLoad", "pascalprecht.translate", cobis.modules.CONTAINER, "designerModule"], ["DSGNR", "MMZJB"]);
    cobisMainModule.config(["$controllerProvider", "$compileProvider", "$filterProvider", "$locationProvider", "$routeProvider", "$provide", "$translateProvider", "$translatePartialLoaderProvider", "$ocLazyLoadProvider",

    function($controllerProvider, $compileProvider, $filterProvider, $locationProvider, $routeProvider, $provide, $translateProvider, $translatePartialLoaderProvider, $ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            asyncLoader: $script
        });
        $locationProvider.html5Mode(true);
        cobisMainModule.controllerProvider = $controllerProvider;
        cobisMainModule.compileProvider = $compileProvider;
        cobisMainModule.routeProvider = $routeProvider;
        cobisMainModule.filterProvider = $filterProvider;
        cobisMainModule.provide = $provide;
        var culture = cobis.userContext.getValue(cobis.constant.CULTURE);
        $routeProvider.when("/VC_FILTROAUIP_552294", {
            templateUrl: "VC_FILTROAUIP_552294_FORM.html",
            controller: "VC_FILTROAUIP_552294_CTRL",
            label: "FormFiltro",
            resolve: {
                i18n: function($translatePartialLoader, $translate) {
                    cobis.showMessageWindow.customLoading(true);
                    $translatePartialLoader.addPart('DSGNR');
                    $translatePartialLoader.addPart('MMZJB');
                    return $translate.use(cobis.userContext.getValue(cobis.constant.CULTURE)).then(function() {
                        return $translate.refresh().then(function() {
                            cobis.showMessageWindow.customLoading(false);
                        });
                    });
                }
            }
        }).otherwise({
            redirectTo: function(routeParams, path, search) {
                return "/VC_FILTROAUIP_552294?" + $.param(search);
            }
        });
        VC_FILTROAUIP_552294(cobisMainModule);
    }]);
} else {
    VC_FILTROAUIP_552294(cobisMainModule);
}