//Designer Generator v 7.2.0 - SPR 2020-20 08/10/2020
var designerEvents = designerEvents || {};
designerEvents.api = designerEvents.api || {};
designerEvents.api.formconsulta = designerEvents.api.formconsulta || designer.dsgEvents();

function VC_APIDWVFAZS_909466(cobisMainModule) {
    cobisMainModule.controllerProvider.register("VC_APIDWVFAZS_909466_MAIN_CTRL", ["$scope", "breadcrumbs",

    function($scope, breadcrumbs) {
        $scope.breadcrumbs = breadcrumbs;
    }]);
    cobisMainModule.controllerProvider.register("VC_APIDWVFAZS_909466_CTRL", ["cobisMessage", cobis.modules.CONTAINER + ".preferencesService", "dsgnrUtils", "designer", "$scope", "$location", "$document", "$parse", "$filter", "$modal", "$q", "$compile", "$timeout", "$translate",

    function(cobisMessage, preferencesService, dsgnrUtils, designer, $scope, $location, $document, $parse, $filter, $modal, $q, $compile, $timeout, $translate) {
        $scope.designer = designer;
        $scope.validatorOptions = validatorOptions;
        $scope.vc = designer.initViewContainer({
            moduleId: "MMZJB",
            subModuleId: "SSMMJ",
            taskId: "T_MMZJBPDCNINOQ_466",
            taskVersion: "1.0.0",
            viewContainerId: "VC_APIDWVFAZS_909466",
            hasCloseModalEvent: false,
            serverEvents: true
        },
            "${contextPath}/resources/MMZJB/SSMMJ/T_MMZJBPDCNINOQ_466",
        designerEvents.api.formconsulta,
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
                vcName: 'VC_APIDWVFAZS_909466'
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
                    taskId: 'T_MMZJBPDCNINOQ_466',
                    version: '1.0.0',
                    user: $scope.vc.args.user
                },
                entityNames: {
                    Persona: "Persona"
                },
                entities: {
                    Persona: {
                        idPersona: 'AT24_IDPERSAN537',
                        apellido: 'AT33_APELLIDD537',
                        nombre: 'AT46_NOMBRELV537',
                        telefono: 'AT56_TELEFOOO537',
                        sexo: 'AT66_SEXOXTUC537',
                        _pks: [],
                        _entityId: 'EN_PERSONAHF_537',
                        _entityVersion: '1.0.0',
                        _transient: false
                    }
                },
                relations: []
            };
            $scope.vc.queryProperties = {};
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
                $scope.vc.execute("temporarySave", VC_APIDWVFAZS_909466, data, function() {});
            };
            $scope.vc.temporaryRead = function() {
                if (page.hasTemporaryDataSupport) {
                    var data = {
                        model: $scope.vc.model,
                        temporaryStorePK: $scope.vc.metadata.taskPk
                    };
                    return $scope.vc.executeService("readTemporaryData", VC_APIDWVFAZS_909466, data).then(

                    function(response) {
                        var result = $scope.vc.processTemporaryResponse(response);
                        if (result) {
                            $scope.vc.execute("deleteTemporaryData", VC_APIDWVFAZS_909466, data, function() {});
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
            $scope.vc.viewState.VC_APIDWVFAZS_909466 = {
                style: []
            };
            //ViewState - Group: Group1713
            $scope.vc.createViewState({
                id: "G_CBHFVHFVXH_922478",
                hasId: true,
                componentStyle: [],
                label: 'Group1713',
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
                    idPersona: {
                        type: "number",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Persona", "idPersona", 0)
                    },
                    apellido: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Persona", "apellido", '')
                    },
                    nombre: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Persona", "nombre", '')
                    },
                    telefono: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Persona", "telefono", '')
                    }
                }
            });
            $scope.vc.model.Persona = new kendo.data.DataSource({
                pageSize: 10,
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
                                        'QV_RD85_WCU72',
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
                                            'allowPaging': true,
                                            'pageSize': 10
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
                        $("#QV_RD85_WCU72").data("kendoExtGrid").cancelChanges();
                    }
                }
            });
            $scope.vc.queries.Q_PERSANOO_FF85 = $scope.vc.model.Persona;
            $scope.vc.trackers.Persona = new $scope.vc.crud.DataSourceTracker(
            $scope.vc.metadata.entities.Persona);
            $scope.vc.model.Persona.bind('change', function(e) {
                $scope.vc.trackers.Persona.track(e);
            });
            $scope.vc.grids.QV_RD85_WCU72 = {};
            $scope.vc.grids.QV_RD85_WCU72.queryId = 'Q_PERSANOO_FF85';
            $scope.vc.viewState.QV_RD85_WCU72 = {
                style: []
            };
            $scope.vc.viewState.QV_RD85_WCU72.column = {};
            $scope.vc.grids.QV_RD85_WCU72.editable = {
                mode: 'inline'
            };
            $scope.vc.grids.QV_RD85_WCU72.events = {
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
                    var index = e.container.find("td > a.k-grid-update").parent().index();
                    if (index != -1) {
                        $scope.vc.changeGridColumnWidth('QV_RD85_WCU72', index, "0px");
                    }
                    $scope.vc.trackers.Persona.cancelTrackedChanges(e.model);
                },
                edit: function(e) {
                    $scope.vc.grids.QV_RD85_WCU72.selectedRow = e.model;
                    var commandCell = $scope.vc.getCommandCellData(e.container);
                    var titleUpdate = $filter('translate')('DSGNR.SYS_DSGNR_LBLACEPT0_00007');
                    var titleCancel = $filter('translate')('DSGNR.SYS_DSGNR_LBLCANCEL_00006');
                    $scope.vc.changeGridColumnWidth('QV_RD85_WCU72', commandCell.index(), "100px");
                    commandCell.html("<a class='btn btn-default k-grid-update cb-row-image-button' onmousedown='this.focus()' title='" + titleUpdate + "' href='#'><span class='fa fa-check-circle'></span></a><a class='btn btn-default k-grid-cancel cb-row-image-button' title='" + titleCancel + "' href='#'><span class='fa fa-times-circle'></span></a>");
                    $scope.vc.validateForm();
                },
                dataBound: function(e) {
                    var index;
                    var grid = e.sender;
                    index = $scope.vc.getCommandCellData(grid.element).index();
                    if (index != -1) {
                        $scope.vc.changeGridColumnWidth('QV_RD85_WCU72', index, "0px");
                    }
                    $scope.vc.gridDataBound("QV_RD85_WCU72", false, grid);
                    $scope.vc.hideShowColumns("QV_RD85_WCU72", grid);
                    var dataView = null;
                    dataView = this.dataSource.view();
                    var styleName, iStyle;
                    for (var i = 0; i < dataView.length; i++) {
                        if (typeof $scope.vc.viewState.QV_RD85_WCU72.rows[dataView[i].uid] != "undefined") {
                            for (iStyle = 0; iStyle < $scope.vc.viewState.QV_RD85_WCU72.rows[dataView[i].uid].style.length; iStyle++) {
                                styleName = $scope.vc.viewState.QV_RD85_WCU72.rows[dataView[i].uid].style[iStyle];
                                if ($("#QV_RD85_WCU72 tbody").find("tr[data-uid=" + dataView[i].uid + "]").hasClass(styleName) === false) {
                                    $("#QV_RD85_WCU72 tbody").find("tr[data-uid=" + dataView[i].uid + "]").addClass(styleName);
                                }
                            }
                        }
                    }
                }
            };
            //Comandos de registros del Grid
            $scope.vc.grids.QV_RD85_WCU72.columns = [];
            //Registros de fila del Grid
            $scope.vc.viewState.QV_RD85_WCU72.rows = [];
            //Controles de edicion en linea del Grid
            $scope.vc.viewState.QV_RD85_WCU72.column.idPersona = {
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
                componentId: 'VA_TEXTINPUTBOXJBR_546478',
                element: []
            };
            $scope.vc.grids.QV_RD85_WCU72.AT24_IDPERSAN537 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_RD85_WCU72.column.idPersona.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXJBR_546478",
                        'data-validation-code': "{{vc.viewState.QV_RD85_WCU72.column.idPersona.validationCode}}",
                        'kendo-numeric-text-box': "",
                        'datatypes-Limit': "N",
                        'k-spinners': "false",
                        'k-step': "0",
                        'k-format': "vc.viewState.QV_RD85_WCU72.column.idPersona.format",
                        'k-decimals': "vc.viewState.QV_RD85_WCU72.column.idPersona.decimals",
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_RD85_WCU72.column.idPersona.style"
                    });
                    textInput.appendTo(container);
                }
            };
            $scope.vc.viewState.QV_RD85_WCU72.column.apellido = {
                title: 'apellido',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXUSC_268478',
                element: []
            };
            $scope.vc.grids.QV_RD85_WCU72.AT33_APELLIDD537 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_RD85_WCU72.column.apellido.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXUSC_268478",
                        'data-validation-code': "{{vc.viewState.QV_RD85_WCU72.column.apellido.validationCode}}",
                        'type': "text",
                        'class': "k-textbox",
                        'maxlength': 30,
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_RD85_WCU72.column.apellido.style"
                    });
                    textInput.appendTo(container);
                }
            };
            $scope.vc.viewState.QV_RD85_WCU72.column.nombre = {
                title: 'nombre',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXMXY_582478',
                element: []
            };
            $scope.vc.grids.QV_RD85_WCU72.AT46_NOMBRELV537 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_RD85_WCU72.column.nombre.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXMXY_582478",
                        'data-validation-code': "{{vc.viewState.QV_RD85_WCU72.column.nombre.validationCode}}",
                        'type': "text",
                        'class': "k-textbox",
                        'maxlength': 30,
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_RD85_WCU72.column.nombre.style"
                    });
                    textInput.appendTo(container);
                }
            };
            $scope.vc.viewState.QV_RD85_WCU72.column.telefono = {
                title: 'telefono',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXVMK_161478',
                element: []
            };
            $scope.vc.grids.QV_RD85_WCU72.AT56_TELEFOOO537 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_RD85_WCU72.column.telefono.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXVMK_161478",
                        'data-validation-code': "{{vc.viewState.QV_RD85_WCU72.column.telefono.validationCode}}",
                        'type': "text",
                        'class': "k-textbox",
                        'maxlength': 30,
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_RD85_WCU72.column.telefono.style"
                    });
                    textInput.appendTo(container);
                }
            };
            //Creacion de columnas del Grid
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_RD85_WCU72.columns.push({
                    field: 'idPersona',
                    title: '{{vc.viewState.QV_RD85_WCU72.column.idPersona.title|translate:vc.viewState.QV_RD85_WCU72.column.idPersona.titleArgs}}',
                    width: $scope.vc.viewState.QV_RD85_WCU72.column.idPersona.width,
                    format: $scope.vc.viewState.QV_RD85_WCU72.column.idPersona.format,
                    editor: $scope.vc.grids.QV_RD85_WCU72.AT24_IDPERSAN537.control,
                    template: "<span ng-class='vc.viewState.QV_RD85_WCU72.column.idPersona.element[dataItem.dsgnrId].style' ng-bind='(vc.getStringColumnFormat)?vc.getStringColumnFormat(dataItem.idPersona, \"QV_RD85_WCU72\", \"idPersona\"):kendo.toString(#=idPersona#, vc.viewState.QV_RD85_WCU72.column.idPersona.format)'></span>",
                    attributes: {
                        "class": "text-right",
                        "ng-class": "vc.viewState.QV_RD85_WCU72.column.idPersona.style",
                        "title": "{{vc.viewState.QV_RD85_WCU72.column.idPersona.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_RD85_WCU72.column.idPersona.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_RD85_WCU72.columns.push({
                    field: 'apellido',
                    title: '{{vc.viewState.QV_RD85_WCU72.column.apellido.title|translate:vc.viewState.QV_RD85_WCU72.column.apellido.titleArgs}}',
                    width: $scope.vc.viewState.QV_RD85_WCU72.column.apellido.width,
                    format: $scope.vc.viewState.QV_RD85_WCU72.column.apellido.format,
                    editor: $scope.vc.grids.QV_RD85_WCU72.AT33_APELLIDD537.control,
                    template: "<span ng-class='vc.viewState.QV_RD85_WCU72.column.apellido.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.apellido, \"QV_RD85_WCU72\", \"apellido\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_RD85_WCU72.column.apellido.style",
                        "title": "{{vc.viewState.QV_RD85_WCU72.column.apellido.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_RD85_WCU72.column.apellido.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_RD85_WCU72.columns.push({
                    field: 'nombre',
                    title: '{{vc.viewState.QV_RD85_WCU72.column.nombre.title|translate:vc.viewState.QV_RD85_WCU72.column.nombre.titleArgs}}',
                    width: $scope.vc.viewState.QV_RD85_WCU72.column.nombre.width,
                    format: $scope.vc.viewState.QV_RD85_WCU72.column.nombre.format,
                    editor: $scope.vc.grids.QV_RD85_WCU72.AT46_NOMBRELV537.control,
                    template: "<span ng-class='vc.viewState.QV_RD85_WCU72.column.nombre.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.nombre, \"QV_RD85_WCU72\", \"nombre\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_RD85_WCU72.column.nombre.style",
                        "title": "{{vc.viewState.QV_RD85_WCU72.column.nombre.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_RD85_WCU72.column.nombre.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_RD85_WCU72.columns.push({
                    field: 'telefono',
                    title: '{{vc.viewState.QV_RD85_WCU72.column.telefono.title|translate:vc.viewState.QV_RD85_WCU72.column.telefono.titleArgs}}',
                    width: $scope.vc.viewState.QV_RD85_WCU72.column.telefono.width,
                    format: $scope.vc.viewState.QV_RD85_WCU72.column.telefono.format,
                    editor: $scope.vc.grids.QV_RD85_WCU72.AT56_TELEFOOO537.control,
                    template: "<span ng-class='vc.viewState.QV_RD85_WCU72.column.telefono.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.telefono, \"QV_RD85_WCU72\", \"telefono\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_RD85_WCU72.column.telefono.style",
                        "title": "{{vc.viewState.QV_RD85_WCU72.column.telefono.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_RD85_WCU72.column.telefono.hidden
                });
            }
            $scope.vc.viewState.QV_RD85_WCU72.column.cmdEdition = {};
            $scope.vc.viewState.QV_RD85_WCU72.column.cmdEdition.hidden = false;
            $scope.vc.grids.QV_RD85_WCU72.columns.push({
                field: 'cmdEdition',
                title: ' ',
                command: {
                    template: "<span class='cb-commands'></span>"
                },
                attributes: {
                    "class": "btn-toolbar"
                },
                hidden: $scope.vc.viewState.QV_RD85_WCU72.column.cmdEdition.hidden,
                width: Number(sessionStorage.columnSize) || 100
            });
            $scope.vc.viewState.QV_RD85_WCU72.toolbar = {
                create: {
                    visible: !designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode)
                }
            }
            $scope.vc.grids.QV_RD85_WCU72.toolbar = [{
                "name": "create",
                "text": "",
                "template": "<button class = 'btn btn-default k-grid-add cb-grid-button' " + "ng-if = 'vc.viewState.QV_RD85_WCU72.toolbar.create.visible' " + "ng-disabled = 'vc.viewState.G_CBHFVHFVXH_922478.disabled?true:false'" + "title = \"{{'DSGNR.SYS_DSGNR_LBLNEW000_00013'|translate}}\" >" + "<span class='fa fa-plus'></span>{{'DSGNR.SYS_DSGNR_LBLNEW000_00013'|translate}}</button>"
            }];
            //ViewState - Command: Accept
            $scope.vc.createViewState({
                id: "T_MMZJBPDCNINOQ_466_ACCEPT",
                componentStyle: [],
                label: 'Accept',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Command: Cancel
            $scope.vc.createViewState({
                id: "T_MMZJBPDCNINOQ_466_CANCEL",
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
                $scope.vc.render('VC_APIDWVFAZS_909466');
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
    var cobisMainModule = cobis.createModule("VC_APIDWVFAZS_909466", ["ngResource", "ngRoute", "kendo.directives", "ui.bootstrap", "oc.lazyLoad", "pascalprecht.translate", cobis.modules.CONTAINER, "designerModule"], ["DSGNR", "MMZJB"]);
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
        $routeProvider.when("/VC_APIDWVFAZS_909466", {
            templateUrl: "VC_APIDWVFAZS_909466_FORM.html",
            controller: "VC_APIDWVFAZS_909466_CTRL",
            label: "FormConsulta",
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
                return "/VC_APIDWVFAZS_909466?" + $.param(search);
            }
        });
        VC_APIDWVFAZS_909466(cobisMainModule);
    }]);
} else {
    VC_APIDWVFAZS_909466(cobisMainModule);
}