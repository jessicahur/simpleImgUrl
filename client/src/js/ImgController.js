export default function($scope, ImgService) {
  $scope.imgs = ImgService.query(res => {
    console.log(res);
  });
}
