//Designer Generator v 7.2.0 - SPR 2020-20 08/10/2020
var designerEvents = designerEvents || {};
designerEvents.api = designerEvents.api || {};
designerEvents.api.formprospecto = designerEvents.api.formprospecto || designer.dsgEvents();

function VC_PROSPECTOO_276384(cobisMainModule) {
    cobisMainModule.controllerProvider.register("VC_PROSPECTOO_276384_MAIN_CTRL", ["$scope", "breadcrumbs",

    function($scope, breadcrumbs) {
        $scope.breadcrumbs = breadcrumbs;
    }]);
    cobisMainModule.controllerProvider.register("VC_PROSPECTOO_276384_CTRL", ["cobisMessage", cobis.modules.CONTAINER + ".preferencesService", "dsgnrUtils", "designer", "$scope", "$location", "$document", "$parse", "$filter", "$modal", "$q", "$compile", "$timeout", "$translate",

    function(cobisMessage, preferencesService, dsgnrUtils, designer, $scope, $location, $document, $parse, $filter, $modal, $q, $compile, $timeout, $translate) {
        $scope.designer = designer;
        $scope.validatorOptions = validatorOptions;
        $scope.vc = designer.initViewContainer({
            moduleId: "MMZJB",
            subModuleId: "SSMMJ",
            taskId: "T_MMZJBLUNRNLXJ_384",
            taskVersion: "1.0.0",
            viewContainerId: "VC_PROSPECTOO_276384",
            hasCloseModalEvent: false,
            serverEvents: true
        },
            "${contextPath}/resources/MMZJB/SSMMJ/T_MMZJBLUNRNLXJ_384",
        designerEvents.api.formprospecto,
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
                vcName: 'VC_PROSPECTOO_276384'
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
                    taskId: 'T_MMZJBLUNRNLXJ_384',
                    version: '1.0.0',
                    user: $scope.vc.args.user
                },
                entityNames: {
                    FiltroBusquedaPersona: "FiltroBusquedaPersona",
                    Prospecto: "Prospecto"
                },
                entities: {
                    FiltroBusquedaPersona: {
                        filtro: 'AT53_FILTRONL224',
                        tipo: 'AT90_TIPOBHNM224',
                        _pks: [],
                        _entityId: 'EN_FILTROBRU_224',
                        _entityVersion: '1.0.0',
                        _transient: false
                    },
                    Prospecto: {
                        apellido: 'AT21_APELLIOD671',
                        fecha: 'AT24_FECHACNJ671',
                        idProspecto: 'AT36_IDPROSCC671',
                        tipo: 'AT69_TIPOCLVZ671',
                        nombre: 'AT87_NOMBRENU671',
                        estado: 'AT95_ESTADOIE671',
                        telefono: 'AT99_TELEFOOO671',
                        _pks: [],
                        _entityId: 'EN_PROSPECOT_671',
                        _entityVersion: '1.0.0',
                        _transient: false
                    }
                },
                relations: []
            };
            $scope.vc.queryProperties = {};
            $scope.vc.queryProperties.Q_PROSPCCT_UB39 = {
                autoCrud: false
            };
            $scope.vc.getRequestQuery_Q_PROSPCCT_UB39 = function() {
                var parametersAux = {};
                if ($.isEmptyObject($scope.vc.queries.Q_PROSPCCT_UB39_filters)) {
                    parametersAux = {};
                } else {
                    var filters = $scope.vc.queries.Q_PROSPCCT_UB39_filters;
                    parametersAux = {
                        estado: filters.estado
                    };
                }
                return {
                    mainEntityPk: {
                        entityId: 'EN_PROSPECOT_671',
                        version: '1.0.0'
                    },
                    queryPk: {
                        queryId: 'Q_PROSPCCT_UB39',
                        version: '1.0.0'
                    },
                    parameters: parametersAux,
                    filters: {},
                    updateParameters: function() {
                        if ($.isEmptyObject(this.filters) && $.isEmptyObject(this.parameters)) {
                            //No tiene relaciones con otra entidad
                            this.parameters = {};
                        } else if (!$.isEmptyObject(this.filters) && $.isEmptyObject(this.parameters)) {
                            this.parameters['estado'] = this.filters.estado;
                        }
                    }
                }
            };
            $scope.vc.queries.Q_PROSPCCT_UB39_filters = {};
            var defaultValues = {
                FiltroBusquedaPersona: {},
                Prospecto: {}
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
                $scope.vc.execute("temporarySave", VC_PROSPECTOO_276384, data, function() {});
            };
            $scope.vc.temporaryRead = function() {
                if (page.hasTemporaryDataSupport) {
                    var data = {
                        model: $scope.vc.model,
                        temporaryStorePK: $scope.vc.metadata.taskPk
                    };
                    return $scope.vc.executeService("readTemporaryData", VC_PROSPECTOO_276384, data).then(

                    function(response) {
                        var result = $scope.vc.processTemporaryResponse(response);
                        if (result) {
                            $scope.vc.execute("deleteTemporaryData", VC_PROSPECTOO_276384, data, function() {});
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
            $scope.vc.viewState.VC_PROSPECTOO_276384 = {
                style: []
            };
            $scope.vc.model.FiltroBusquedaPersona = {
                filtro: $scope.vc.channelDefaultValues("FiltroBusquedaPersona", "filtro"),
                tipo: $scope.vc.channelDefaultValues("FiltroBusquedaPersona", "tipo")
            };
            //ViewState - Group: Group1826
            $scope.vc.createViewState({
                id: "G_PROSPECTTO_816970",
                hasId: true,
                componentStyle: [],
                label: 'Group1826',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Entity: FiltroBusquedaPersona, Attribute: filtro
            $scope.vc.createViewState({
                id: "VA_ESTADOLQYUSLQQB_287970",
                componentStyle: [],
                label: "MMZJB.LBL_MMZJB_ESTADOVVV_58193",
                validationCode: 0,
                readOnly: designer.constants.mode.Query,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All,
                isComboBox: true
            });
            $scope.vc.catalogs.VA_ESTADOLQYUSLQQB_287970 = new kendo.data.DataSource({
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
                        $scope.vc.setComboBoxDefaultValue("VA_ESTADOLQYUSLQQB_287970", true, data[0], 'code', data);
                        $scope.vc.setEnableAndReadonlyStatus("VA_ESTADOLQYUSLQQB_287970");
                    }
                },
                requestStart: function(e) {
                    $scope.vc.requestStartRead(e, "VA_ESTADOLQYUSLQQB_287970", null);
                },
                serverFiltering: true,
                schema: {
                    model: {
                        id: "code"
                    }
                }
            }); //ViewState - Entity: FiltroBusquedaPersona, Attribute: tipo
            $scope.vc.createViewState({
                id: "VA_TIPOVMWPVQFRMDM_590970",
                componentStyle: [],
                label: "MMZJB.LBL_MMZJB_TIPOBVQSH_32352",
                validationCode: 0,
                readOnly: designer.constants.mode.Query,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All,
                isComboBox: true
            });
            $scope.vc.catalogs.VA_TIPOVMWPVQFRMDM_590970 = new kendo.data.DataSource({
                transport: {
                    read: function(options) {
                        var data = [{
                            code: 'A',
                            value: 'Tipo A'
                        }, {
                            code: 'B',
                            value: 'Tipo B'
                        }];
                        options.success(data);
                        $scope.vc.setComboBoxDefaultValue("VA_TIPOVMWPVQFRMDM_590970", true, data[0], 'code', data);
                        $scope.vc.setEnableAndReadonlyStatus("VA_TIPOVMWPVQFRMDM_590970");
                    }
                },
                requestStart: function(e) {
                    $scope.vc.requestStartRead(e, "VA_TIPOVMWPVQFRMDM_590970", null);
                },
                serverFiltering: true,
                schema: {
                    model: {
                        id: "code"
                    }
                }
            });
            $scope.vc.createViewState({
                id: "VA_VAIMAGEBUTTONNN_546970",
                componentStyle: [],
                imageId: "fa fa-search",
                label: '',
                queryId: 'Q_PROSPCCT_UB39',
                validationCode: 0,
                readOnly: designer.constants.mode.None,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Group: Group2587
            $scope.vc.createViewState({
                id: "G_PROSPECTTO_969970",
                hasId: true,
                componentStyle: [],
                label: 'Group2587',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            $scope.vc.types.Prospecto = kendo.data.Model.define({
                id: "dsgnrId",
                fields: {
                    dsgnrId: {
                        type: "string"
                    },
                    trackId: {
                        type: "string"
                    },
                    idProspecto: {
                        type: "number",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Prospecto", "idProspecto", 0)
                    },
                    nombre: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Prospecto", "nombre", '')
                    },
                    apellido: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Prospecto", "apellido", '')
                    },
                    telefono: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Prospecto", "telefono", '')
                    },
                    estado: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Prospecto", "estado", '')
                    },
                    fecha: {
                        type: "date",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Prospecto", "fecha", new Date())
                    },
                    tipo: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Prospecto", "tipo", '')
                    }
                }
            });
            $scope.vc.model.Prospecto = new kendo.data.DataSource({
                transport: {
                    read: function(options) {
                        var promise = false;
                        var isRefresh = (angular.isDefined(options.data) && angular.isDefined(options.data.refresh));
                        if (isRefresh || !designer.enums.hasFlag(designer.constants.mode.Insert, $scope.vc.mode)) {
                            var queryId = 'Q_PROSPCCT_UB39';
                            var queryRequest = $scope.vc.getRequestQuery_Q_PROSPCCT_UB39();
                            if (queryId && queryRequest) {
                                var queryLoaded = queryRequest.loaded;
                                if (angular.isUndefined(queryLoaded) || isRefresh === true) {
                                    queryRequest.loaded = true;
                                    queryRequest.updateParameters();
                                    promise = true;
                                    $scope.vc.executeQuery(
                                        'QV_BY39_XAS13',
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
                    model: $scope.vc.types.Prospecto
                },
                aggregate: [],
                error: function(e) {
                    if (e.xhr.message && e.xhr.message === 'DeletingError') {
                        $("#QV_BY39_XAS13").data("kendoExtGrid").cancelChanges();
                    }
                }
            });
            $scope.vc.queries.Q_PROSPCCT_UB39 = $scope.vc.model.Prospecto;
            $scope.vc.trackers.Prospecto = new $scope.vc.crud.DataSourceTracker(
            $scope.vc.metadata.entities.Prospecto);
            $scope.vc.model.Prospecto.bind('change', function(e) {
                $scope.vc.trackers.Prospecto.track(e);
            });
            $scope.vc.grids.QV_BY39_XAS13 = {};
            $scope.vc.grids.QV_BY39_XAS13.queryId = 'Q_PROSPCCT_UB39';
            $scope.vc.viewState.QV_BY39_XAS13 = {
                style: []
            };
            $scope.vc.viewState.QV_BY39_XAS13.column = {};
            $scope.vc.grids.QV_BY39_XAS13.editable = {
                mode: 'inline',
                confirmation: false
            };
            $scope.vc.grids.QV_BY39_XAS13.events = {
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
                    $scope.vc.trackers.Prospecto.cancelTrackedChanges(e.model);
                },
                edit: function(e) {
                    $scope.vc.grids.QV_BY39_XAS13.selectedRow = e.model;
                    var commandCell = $scope.vc.getCommandCellData(e.container);
                    var titleUpdate = $filter('translate')('DSGNR.SYS_DSGNR_LBLACEPT0_00007');
                    var titleCancel = $filter('translate')('DSGNR.SYS_DSGNR_LBLCANCEL_00006');
                    commandCell.html("<a class='btn btn-default k-grid-update cb-row-image-button' onmousedown='this.focus()' title='" + titleUpdate + "' href='#'><span class='fa fa-check-circle'></span></a><a class='btn btn-default k-grid-cancel cb-row-image-button' title='" + titleCancel + "' href='#'><span class='fa fa-times-circle'></span></a>");
                    $scope.vc.validateForm();
                },
                dataBound: function(e) {
                    var index;
                    var grid = e.sender;
                    $scope.vc.gridDataBound("QV_BY39_XAS13", false, grid);
                    $scope.vc.hideShowColumns("QV_BY39_XAS13", grid);
                    var dataView = null;
                    dataView = this.dataSource.view();
                    var styleName, iStyle;
                    for (var i = 0; i < dataView.length; i++) {
                        if (typeof $scope.vc.viewState.QV_BY39_XAS13.rows[dataView[i].uid] != "undefined") {
                            for (iStyle = 0; iStyle < $scope.vc.viewState.QV_BY39_XAS13.rows[dataView[i].uid].style.length; iStyle++) {
                                styleName = $scope.vc.viewState.QV_BY39_XAS13.rows[dataView[i].uid].style[iStyle];
                                if ($("#QV_BY39_XAS13 tbody").find("tr[data-uid=" + dataView[i].uid + "]").hasClass(styleName) === false) {
                                    $("#QV_BY39_XAS13 tbody").find("tr[data-uid=" + dataView[i].uid + "]").addClass(styleName);
                                }
                            }
                        }
                    }
                }
            };
            //Comandos de registros del Grid
            $scope.vc.grids.QV_BY39_XAS13.columns = [];
            //Registros de fila del Grid
            $scope.vc.viewState.QV_BY39_XAS13.rows = [];
            //Controles de edicion en linea del Grid
            $scope.vc.viewState.QV_BY39_XAS13.column.idProspecto = {
                title: 'idProspecto',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                format: "n0",
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXUOC_402970',
                element: []
            };
            $scope.vc.grids.QV_BY39_XAS13.AT36_IDPROSCC671 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_BY39_XAS13.column.idProspecto.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXUOC_402970",
                        'data-validation-code': "{{vc.viewState.QV_BY39_XAS13.column.idProspecto.validationCode}}",
                        'kendo-numeric-text-box': "",
                        'datatypes-Limit': "N",
                        'k-spinners': "false",
                        'k-step': "0",
                        'k-format': "vc.viewState.QV_BY39_XAS13.column.idProspecto.format",
                        'k-decimals': "vc.viewState.QV_BY39_XAS13.column.idProspecto.decimals",
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_BY39_XAS13.column.idProspecto.style"
                    });
                    textInput.appendTo(container);
                }
            };
            $scope.vc.viewState.QV_BY39_XAS13.column.nombre = {
                title: 'nombre',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXXOC_368970',
                element: []
            };
            $scope.vc.grids.QV_BY39_XAS13.AT87_NOMBRENU671 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_BY39_XAS13.column.nombre.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXXOC_368970",
                        'data-validation-code': "{{vc.viewState.QV_BY39_XAS13.column.nombre.validationCode}}",
                        'type': "text",
                        'class': "k-textbox",
                        'maxlength': 30,
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_BY39_XAS13.column.nombre.style"
                    });
                    textInput.appendTo(container);
                }
            };
            $scope.vc.viewState.QV_BY39_XAS13.column.apellido = {
                title: 'apellido',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXVTD_722970',
                element: []
            };
            $scope.vc.grids.QV_BY39_XAS13.AT21_APELLIOD671 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_BY39_XAS13.column.apellido.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXVTD_722970",
                        'data-validation-code': "{{vc.viewState.QV_BY39_XAS13.column.apellido.validationCode}}",
                        'type': "text",
                        'class': "k-textbox",
                        'maxlength': 30,
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_BY39_XAS13.column.apellido.style"
                    });
                    textInput.appendTo(container);
                }
            };
            $scope.vc.viewState.QV_BY39_XAS13.column.telefono = {
                title: 'telefono',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXVHW_725970',
                element: []
            };
            $scope.vc.grids.QV_BY39_XAS13.AT99_TELEFOOO671 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_BY39_XAS13.column.telefono.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXVHW_725970",
                        'data-validation-code': "{{vc.viewState.QV_BY39_XAS13.column.telefono.validationCode}}",
                        'type': "text",
                        'class': "k-textbox",
                        'maxlength': 30,
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_BY39_XAS13.column.telefono.style"
                    });
                    textInput.appendTo(container);
                }
            };
            $scope.vc.viewState.QV_BY39_XAS13.column.estado = {
                title: 'estado',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXVXU_839970',
                element: []
            };
            $scope.vc.grids.QV_BY39_XAS13.AT95_ESTADOIE671 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_BY39_XAS13.column.estado.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXVXU_839970",
                        'data-validation-code': "{{vc.viewState.QV_BY39_XAS13.column.estado.validationCode}}",
                        'type': "text",
                        'class': "k-textbox",
                        'maxlength': 30,
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_BY39_XAS13.column.estado.style"
                    });
                    textInput.appendTo(container);
                }
            };
            $scope.vc.viewState.QV_BY39_XAS13.column.fecha = {
                title: 'fecha',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                format: "d",
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_DATEFIELDFRKVQM_872970',
                element: []
            };
            $scope.vc.grids.QV_BY39_XAS13.AT24_FECHACNJ671 = {
                control: function(container, options) {
                    var textInput = $('<input />', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_BY39_XAS13.column.fecha.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_DATEFIELDFRKVQM_872970",
                        'kendo-ext-date-picker': "",
                        'placeholder': "{{dateFormatPlaceholder}}",
                        'date-format': "{{dateFormat}}",
                        'date-input': true,
                        'k-options': "vc.getDateOptions(vc.viewState.QV_BY39_XAS13, 'fecha')",
                        'data-validation-code': "{{vc.viewState.QV_BY39_XAS13.column.fecha.validationCode}}",
                        'ng-class': "vc.viewState.QV_BY39_XAS13.column.fecha.style"
                    });
                    textInput.appendTo(container);
                }
            };
            $scope.vc.viewState.QV_BY39_XAS13.column.tipo = {
                title: 'tipo',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXWIS_445970',
                element: []
            };
            $scope.vc.grids.QV_BY39_XAS13.AT69_TIPOCLVZ671 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_BY39_XAS13.column.tipo.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXWIS_445970",
                        'data-validation-code': "{{vc.viewState.QV_BY39_XAS13.column.tipo.validationCode}}",
                        'type': "text",
                        'class': "k-textbox",
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_BY39_XAS13.column.tipo.style"
                    });
                    textInput.appendTo(container);
                }
            };
            //Creacion de columnas del Grid
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_BY39_XAS13.columns.push({
                    field: 'idProspecto',
                    title: '{{vc.viewState.QV_BY39_XAS13.column.idProspecto.title|translate:vc.viewState.QV_BY39_XAS13.column.idProspecto.titleArgs}}',
                    width: $scope.vc.viewState.QV_BY39_XAS13.column.idProspecto.width,
                    format: $scope.vc.viewState.QV_BY39_XAS13.column.idProspecto.format,
                    editor: $scope.vc.grids.QV_BY39_XAS13.AT36_IDPROSCC671.control,
                    template: "<span ng-class='vc.viewState.QV_BY39_XAS13.column.idProspecto.element[dataItem.dsgnrId].style' ng-bind='(vc.getStringColumnFormat)?vc.getStringColumnFormat(dataItem.idProspecto, \"QV_BY39_XAS13\", \"idProspecto\"):kendo.toString(#=idProspecto#, vc.viewState.QV_BY39_XAS13.column.idProspecto.format)'></span>",
                    attributes: {
                        "class": "text-right",
                        "ng-class": "vc.viewState.QV_BY39_XAS13.column.idProspecto.style",
                        "title": "{{vc.viewState.QV_BY39_XAS13.column.idProspecto.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_BY39_XAS13.column.idProspecto.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_BY39_XAS13.columns.push({
                    field: 'nombre',
                    title: '{{vc.viewState.QV_BY39_XAS13.column.nombre.title|translate:vc.viewState.QV_BY39_XAS13.column.nombre.titleArgs}}',
                    width: $scope.vc.viewState.QV_BY39_XAS13.column.nombre.width,
                    format: $scope.vc.viewState.QV_BY39_XAS13.column.nombre.format,
                    editor: $scope.vc.grids.QV_BY39_XAS13.AT87_NOMBRENU671.control,
                    template: "<span ng-class='vc.viewState.QV_BY39_XAS13.column.nombre.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.nombre, \"QV_BY39_XAS13\", \"nombre\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_BY39_XAS13.column.nombre.style",
                        "title": "{{vc.viewState.QV_BY39_XAS13.column.nombre.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_BY39_XAS13.column.nombre.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_BY39_XAS13.columns.push({
                    field: 'apellido',
                    title: '{{vc.viewState.QV_BY39_XAS13.column.apellido.title|translate:vc.viewState.QV_BY39_XAS13.column.apellido.titleArgs}}',
                    width: $scope.vc.viewState.QV_BY39_XAS13.column.apellido.width,
                    format: $scope.vc.viewState.QV_BY39_XAS13.column.apellido.format,
                    editor: $scope.vc.grids.QV_BY39_XAS13.AT21_APELLIOD671.control,
                    template: "<span ng-class='vc.viewState.QV_BY39_XAS13.column.apellido.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.apellido, \"QV_BY39_XAS13\", \"apellido\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_BY39_XAS13.column.apellido.style",
                        "title": "{{vc.viewState.QV_BY39_XAS13.column.apellido.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_BY39_XAS13.column.apellido.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_BY39_XAS13.columns.push({
                    field: 'telefono',
                    title: '{{vc.viewState.QV_BY39_XAS13.column.telefono.title|translate:vc.viewState.QV_BY39_XAS13.column.telefono.titleArgs}}',
                    width: $scope.vc.viewState.QV_BY39_XAS13.column.telefono.width,
                    format: $scope.vc.viewState.QV_BY39_XAS13.column.telefono.format,
                    editor: $scope.vc.grids.QV_BY39_XAS13.AT99_TELEFOOO671.control,
                    template: "<span ng-class='vc.viewState.QV_BY39_XAS13.column.telefono.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.telefono, \"QV_BY39_XAS13\", \"telefono\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_BY39_XAS13.column.telefono.style",
                        "title": "{{vc.viewState.QV_BY39_XAS13.column.telefono.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_BY39_XAS13.column.telefono.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_BY39_XAS13.columns.push({
                    field: 'estado',
                    title: '{{vc.viewState.QV_BY39_XAS13.column.estado.title|translate:vc.viewState.QV_BY39_XAS13.column.estado.titleArgs}}',
                    width: $scope.vc.viewState.QV_BY39_XAS13.column.estado.width,
                    format: $scope.vc.viewState.QV_BY39_XAS13.column.estado.format,
                    editor: $scope.vc.grids.QV_BY39_XAS13.AT95_ESTADOIE671.control,
                    template: "<span ng-class='vc.viewState.QV_BY39_XAS13.column.estado.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.estado, \"QV_BY39_XAS13\", \"estado\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_BY39_XAS13.column.estado.style",
                        "title": "{{vc.viewState.QV_BY39_XAS13.column.estado.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_BY39_XAS13.column.estado.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_BY39_XAS13.columns.push({
                    field: 'fecha',
                    title: '{{vc.viewState.QV_BY39_XAS13.column.fecha.title|translate:vc.viewState.QV_BY39_XAS13.column.fecha.titleArgs}}',
                    width: $scope.vc.viewState.QV_BY39_XAS13.column.fecha.width,
                    format: $scope.vc.viewState.QV_BY39_XAS13.column.fecha.format,
                    editor: $scope.vc.grids.QV_BY39_XAS13.AT24_FECHACNJ671.control,
                    template: "<span ng-class='vc.viewState.QV_BY39_XAS13.column.fecha.element[dataItem.dsgnrId].style'>#=((fecha !== null) ? kendo.toString(fecha, 'd') : '')#</span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_BY39_XAS13.column.fecha.style",
                        "title": "{{vc.viewState.QV_BY39_XAS13.column.fecha.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_BY39_XAS13.column.fecha.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_BY39_XAS13.columns.push({
                    field: 'tipo',
                    title: '{{vc.viewState.QV_BY39_XAS13.column.tipo.title|translate:vc.viewState.QV_BY39_XAS13.column.tipo.titleArgs}}',
                    width: $scope.vc.viewState.QV_BY39_XAS13.column.tipo.width,
                    format: $scope.vc.viewState.QV_BY39_XAS13.column.tipo.format,
                    editor: $scope.vc.grids.QV_BY39_XAS13.AT69_TIPOCLVZ671.control,
                    template: "<span ng-class='vc.viewState.QV_BY39_XAS13.column.tipo.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.tipo, \"QV_BY39_XAS13\", \"tipo\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_BY39_XAS13.column.tipo.style",
                        "title": "{{vc.viewState.QV_BY39_XAS13.column.tipo.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_BY39_XAS13.column.tipo.hidden
                });
            }
            $scope.vc.viewState.QV_BY39_XAS13.column.edit = {
                element: []
            };
            $scope.vc.viewState.QV_BY39_XAS13.column["delete"] = {
                element: []
            };
            $scope.vc.viewState.QV_BY39_XAS13.column.cmdEdition = {};
            $scope.vc.viewState.QV_BY39_XAS13.column.cmdEdition.hidden = (!designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode)) ? false : true;
            $scope.vc.grids.QV_BY39_XAS13.columns.push({
                field: 'cmdEdition',
                title: ' ',
                command: [{
                    name: "edit",
                    text: "{{'DSGNR.SYS_DSGNR_LBLEDIT00_00005'|translate}}",
                    cssMap: "{'btn': true, 'btn-default': true, 'cb-row-image-button': true" + ", 'k-grid-edit': !vc.viewState.G_PROSPECTTO_969970.disabled}",
                    template: "<a ng-class='vc.getCssClass(\"edit\", " + "vc.viewState.QV_BY39_XAS13.column.edit.element[dataItem.uid].style, #:cssMap#, vc.viewState.QV_BY39_XAS13.column.edit.element[dataItem.dsgnrId].style)' " + "title=\"{{'DSGNR.SYS_DSGNR_LBLEDIT00_00005'|translate}}\" " + "ng-disabled = (vc.viewState.G_PROSPECTTO_969970.disabled==true?true:false) " + "href='\\#'>" + "<span class='fa fa-pencil'></span>" + "</a>"
                }, {
                    name: "destroy",
                    text: "{{'DSGNR.SYS_DSGNR_LBLDELETE_00008'|translate}}",
                    cssMap: "{'btn': true, 'btn-default': true, 'cb-row-image-button': true" + ", 'k-grid-delete': !vc.viewState.G_PROSPECTTO_969970.disabled}",
                    template: "<a ng-class='vc.getCssClass(\"destroy\", " + "vc.viewState.QV_BY39_XAS13.column.delete.element[dataItem.uid].style, #:cssMap#, vc.viewState.QV_BY39_XAS13.column.delete.element[dataItem.dsgnrId].style)' " + "title=\"{{'DSGNR.SYS_DSGNR_LBLDELETE_00008'|translate}}\" " + "ng-disabled = (vc.viewState.G_PROSPECTTO_969970.disabled==true?true:false) " + ">" + "<span class='fa fa-times'></span>" + "</a>"
                }],
                attributes: {
                    "class": "btn-toolbar"
                },
                hidden: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode) === true ? true : $scope.vc.viewState.QV_BY39_XAS13.column.cmdEdition.hidden,
                width: Number(sessionStorage.columnSize) || 100
            });
            $scope.vc.viewState.QV_BY39_XAS13.toolbar = {
                create: {
                    visible: !designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode)
                }
            }
            $scope.vc.grids.QV_BY39_XAS13.toolbar = [{
                "name": "create",
                "text": "",
                "template": "<button class = 'btn btn-default k-grid-add cb-grid-button' " + "ng-if = 'vc.viewState.QV_BY39_XAS13.toolbar.create.visible' " + "ng-disabled = 'vc.viewState.G_PROSPECTTO_969970.disabled?true:false'" + "title = \"{{'DSGNR.SYS_DSGNR_LBLNEW000_00013'|translate}}\" >" + "<span class='fa fa-plus'></span>{{'DSGNR.SYS_DSGNR_LBLNEW000_00013'|translate}}</button>"
            }];
            //ViewState - Command: Accept
            $scope.vc.createViewState({
                id: "T_MMZJBLUNRNLXJ_384_ACCEPT",
                componentStyle: [],
                label: 'Accept',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Command: Cancel
            $scope.vc.createViewState({
                id: "T_MMZJBLUNRNLXJ_384_CANCEL",
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
                $scope.vc.render('VC_PROSPECTOO_276384');
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
    var cobisMainModule = cobis.createModule("VC_PROSPECTOO_276384", ["ngResource", "ngRoute", "kendo.directives", "ui.bootstrap", "oc.lazyLoad", "pascalprecht.translate", cobis.modules.CONTAINER, "designerModule"], ["DSGNR", "MMZJB"]);
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
        $routeProvider.when("/VC_PROSPECTOO_276384", {
            templateUrl: "VC_PROSPECTOO_276384_FORM.html",
            controller: "VC_PROSPECTOO_276384_CTRL",
            label: "FormProspecto",
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
                return "/VC_PROSPECTOO_276384?" + $.param(search);
            }
        });
        VC_PROSPECTOO_276384(cobisMainModule);
    }]);
} else {
    VC_PROSPECTOO_276384(cobisMainModule);
}