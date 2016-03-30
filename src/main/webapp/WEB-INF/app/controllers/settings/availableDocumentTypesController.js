vireo.controller("AvailableDocumentTypesController", function ($controller, $scope, AvailableDocumentTypesRepo, DragAndDropListenerFactory) {
	angular.extend(this, $controller("AbstractController", {$scope: $scope}));

	$scope.documentTypes = AvailableDocumentTypesRepo.get();
	
	$scope.ready = AvailableDocumentTypesRepo.ready();

	$scope.dragging = false;

	$scope.trashCanId = 'available-document-types-trash';
	
	$scope.sortAction = "confirm";

    $scope.degreeLevels = { 'UNDERGRADUATE' : 'Undergraduate',
                            'MASTERS'       : 'Masters'      ,
                            'DOCTORAL'      : 'Doctoral'     };

    $scope.ready.then(function() {

        $scope.resetDocumentTypes = function(){
            $scope.modalData = {
                name: '',
                degreeLevel: 'UNDERGRADUATE'
            };
        };

        $scope.resetDocumentTypes();

        $scope.createNewDocumentType = function(documentType) {
            AvailableDocumentTypesRepo.add(documentType).then(function() {
                $scope.resetDocumentTypes();
            });
	    };	

        $scope.launchEditModal = function(index) {
            $scope.modalData = $scope.documentTypes.list[index];
            angular.element('#availableDocumentTypesEditModal').modal('show');
	    };	

        $scope.updateDocumentType = function(){
            AvailableDocumentTypesRepo.update($scope.modalData).then(function() {
                $scope.resetDocumentTypes();
            });
        }

        $scope.removeDocumentType = function(index){
            AvailableDocumentTypesRepo.remove(index).then(function() {
                $scope.resetDocumentTypes();
            });
        }

        $scope.reorderDocumentTypes = function(src, dest) {
            AvailableDocumentTypesRepo.reorder(src, dest).then(function() {
                $scope.resetDocumentTypes();
            });
        };

        $scope.selectDocumentType = function(index) {
            $scope.modalData = $scope.documentTypes.list[index];
        };

        $scope.sortDocumentTypes = function(column) {
            if($scope.sortAction == 'confirm') {
                $scope.sortAction = 'sort';
            }
            else if($scope.sortAction == 'sort') {
                AvailableDocumentTypesRepo.sort(column).then(function() {
                    $scope.resetDocumentTypes();
                });
                $scope.sortAction = 'confirm';
            }
        };

        $scope.dragControlListeners = DragAndDropListenerFactory.buildDragControls({
            trashId: $scope.trashCanId,
            dragging: $scope.dragging,
            select: $scope.selectDocumentType,
            model: $scope.documentTypes,
            confirm: '#availableDocumentTypesConfirmRemoveModal',
            reorder: $scope.reorderDocumentTypes,
            container: '#available-document-types'
        });

    });

});
