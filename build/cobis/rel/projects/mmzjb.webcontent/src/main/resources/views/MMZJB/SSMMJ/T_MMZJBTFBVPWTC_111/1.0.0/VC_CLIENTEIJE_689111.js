//Designer Generator v 7.2.0 - SPR 2020-20 08/10/2020
var designerEvents = designerEvents || {};
designerEvents.api = designerEvents.api || {};
designerEvents.api.formcliente = designerEvents.api.formcliente || designer.dsgEvents();

function VC_CLIENTEIJE_689111(cobisMainModule) {
    cobisMainModule.controllerProvider.register("VC_CLIENTEIJE_689111_MAIN_CTRL", ["$scope", "breadcrumbs",

    function($scope, breadcrumbs) {
        $scope.breadcrumbs = breadcrumbs;
    }]);
    cobisMainModule.controllerProvider.register("VC_CLIENTEIJE_689111_CTRL", ["cobisMessage", cobis.modules.CONTAINER + ".preferencesService", "dsgnrUtils", "designer", "$scope", "$location", "$document", "$parse", "$filter", "$modal", "$q", "$compile", "$timeout", "$translate",

    function(cobisMessage, preferencesService, dsgnrUtils, designer, $scope, $location, $document, $parse, $filter, $modal, $q, $compile, $timeout, $translate) {
        $scope.designer = designer;
        $scope.validatorOptions = validatorOptions;
        $scope.vc = designer.initViewContainer({
            moduleId: "MMZJB",
            subModuleId: "SSMMJ",
            taskId: "T_MMZJBTFBVPWTC_111",
            taskVersion: "1.0.0",
            viewContainerId: "VC_CLIENTEIJE_689111",
            hasCloseModalEvent: false,
            serverEvents: true
        },
            "${contextPath}/resources/MMZJB/SSMMJ/T_MMZJBTFBVPWTC_111",
        designerEvents.api.formcliente,
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
                vcName: 'VC_CLIENTEIJE_689111'
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
                    taskId: 'T_MMZJBTFBVPWTC_111',
                    version: '1.0.0',
                    user: $scope.vc.args.user
                },
                entityNames: {
                    Cliente: "Cliente"
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
                    }
                },
                relations: []
            };
            $scope.vc.queryProperties = {};
            var defaultValues = {
                Cliente: {}
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
                $scope.vc.execute("temporarySave", VC_CLIENTEIJE_689111, data, function() {});
            };
            $scope.vc.temporaryRead = function() {
                if (page.hasTemporaryDataSupport) {
                    var data = {
                        model: $scope.vc.model,
                        temporaryStorePK: $scope.vc.metadata.taskPk
                    };
                    return $scope.vc.executeService("readTemporaryData", VC_CLIENTEIJE_689111, data).then(

                    function(response) {
                        var result = $scope.vc.processTemporaryResponse(response);
                        if (result) {
                            $scope.vc.execute("deleteTemporaryData", VC_CLIENTEIJE_689111, data, function() {});
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
            $scope.vc.viewState.VC_CLIENTEIJE_689111 = {
                style: []
            };
            $scope.vc.model.Cliente = {
                apellido: $scope.vc.channelDefaultValues("Cliente", "apellido"),
                nombre: $scope.vc.channelDefaultValues("Cliente", "nombre"),
                idCliente: $scope.vc.channelDefaultValues("Cliente", "idCliente"),
                nacionalidad: $scope.vc.channelDefaultValues("Cliente", "nacionalidad"),
                telefono: $scope.vc.channelDefaultValues("Cliente", "telefono"),
                cedula: $scope.vc.channelDefaultValues("Cliente", "cedula")
            };
            //ViewState - Group: Group1791
            $scope.vc.createViewState({
                id: "G_CLIENTENTN_340646",
                hasId: true,
                componentStyle: [],
                label: 'Group1791',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Entity: Cliente, Attribute: nombre
            $scope.vc.createViewState({
                id: "VA_1FYPMOALFUIWKLK_671646",
                componentStyle: [],
                label: "MMZJB.LBL_MMZJB_NOMBREKRP_59149",
                validationCode: 0,
                readOnly: designer.constants.mode.Query,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Entity: Cliente, Attribute: apellido
            $scope.vc.createViewState({
                id: "VA_2ROYZWDHPRQRYJO_696646",
                componentStyle: [],
                label: "MMZJB.LBL_MMZJB_APELLIDOO_38493",
                validationCode: 0,
                readOnly: designer.constants.mode.Query,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Entity: Cliente, Attribute: telefono
            $scope.vc.createViewState({
                id: "VA_3FKWEQFJVVKNDKZ_370646",
                componentStyle: [],
                label: "MMZJB.LBL_MMZJB_TELEFONOO_68649",
                validationCode: 1,
                readOnly: designer.constants.mode.Query,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All,
                restrict: 'numbers'
            });
            //ViewState - Entity: Cliente, Attribute: cedula
            $scope.vc.createViewState({
                id: "VA_4DNKTATSNTMIZXQ_886646",
                componentStyle: [],
                label: "MMZJB.LBL_MMZJB_CEDULALDF_63438",
                validationCode: 1,
                readOnly: designer.constants.mode.Query,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All,
                restrict: 'numbers'
            });
            //ViewState - Entity: Cliente, Attribute: nacionalidad
            $scope.vc.createViewState({
                id: "VA_NACIONALIDADAZW_778646",
                componentStyle: [],
                label: "MMZJB.LBL_MMZJB_NACIONAII_27843",
                validationCode: 0,
                readOnly: designer.constants.mode.Query,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All,
                isComboBox: true
            });
            $scope.vc.catalogs.VA_NACIONALIDADAZW_778646 = new kendo.data.DataSource({
                transport: {
                    read: function(options) {
                        $scope.vc.loadCatalogCobis('VA_NACIONALIDADAZW_778646', 'cl_pais', function(response) {
                            var data = [];
                            if (angular.isDefined(response.data)) {
                                var catalogResponse = response.data['RESULTVA_NACIONALIDADAZW_778646'];
                                if (angular.isDefined(catalogResponse) && !$.isEmptyObject(catalogResponse)) {
                                    data = catalogResponse;
                                    options.success(data);
                                } else {
                                    options.success(data);
                                }
                            } else {
                                options.success(data);
                            }
                            $scope.vc.setComboBoxDefaultValue("VA_NACIONALIDADAZW_778646", true, data[0], 'code', data);
                            $scope.vc.setEnableAndReadonlyStatus("VA_NACIONALIDADAZW_778646");
                        }, null, options.data.filter, 0);
                    }
                },
                requestStart: function(e) {
                    $scope.vc.requestStartRead(e, "VA_NACIONALIDADAZW_778646", null);
                },
                serverFiltering: true,
                schema: {
                    model: {
                        id: "code"
                    }
                }
            }); //ViewState - Entity: Cliente, Attribute: idCliente
            $scope.vc.createViewState({
                id: "VA_IDCLIENTEUHFNSS_725646",
                componentStyle: [],
                label: "MMZJB.LBL_MMZJB_IDCLIENTE_61097",
                format: "n0",
                decimals: 0,
                validationCode: 0,
                readOnly: designer.constants.mode.Query,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //watch tmpModel - Entity: Cliente, Attribute: idCliente
            $scope.$watch('vc.model.Cliente.idCliente', function(newValue, oldValue) {
                if (newValue !== oldValue) {
                    if (angular.isDefined($scope.vc.tmpModel.Cliente)) {
                        $scope.vc.tmpModel.Cliente.idCliente = newValue;
                    } else {
                        $scope.vc.tmpModel.Cliente = {
                            idCliente: newValue
                        };
                    }
                }
            });
            //ViewState - Command: Accept
            $scope.vc.createViewState({
                id: "T_MMZJBTFBVPWTC_111_ACCEPT",
                componentStyle: [],
                label: 'Accept',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Command: Cancel
            $scope.vc.createViewState({
                id: "T_MMZJBTFBVPWTC_111_CANCEL",
                componentStyle: [],
                label: 'Cancel',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Command: insert
            $scope.vc.createViewState({
                id: "CM_TMMZJBTF_J1T",
                componentStyle: [],
                label: "MMZJB.LBL_MMZJB_GUARDARLZ_91123",
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Command: actualizar
            $scope.vc.createViewState({
                id: "CM_TMMZJBTF_ZS1",
                componentStyle: [],
                label: "MMZJB.LBL_MMZJB_ACTUALIRZ_42421",
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
                $scope.vc.render('VC_CLIENTEIJE_689111');
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
    var cobisMainModule = cobis.createModule("VC_CLIENTEIJE_689111", ["ngResource", "ngRoute", "kendo.directives", "ui.bootstrap", "oc.lazyLoad", "pascalprecht.translate", cobis.modules.CONTAINER, "designerModule"], ["DSGNR", "MMZJB"]);
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
        $routeProvider.when("/VC_CLIENTEIJE_689111", {
            templateUrl: "VC_CLIENTEIJE_689111_FORM.html",
            controller: "VC_CLIENTEIJE_689111_CTRL",
            label: "FormCliente",
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
                return "/VC_CLIENTEIJE_689111?" + $.param(search);
            }
        });
        VC_CLIENTEIJE_689111(cobisMainModule);
    }]);
} else {
    VC_CLIENTEIJE_689111(cobisMainModule);
}