angular.module( 'selector', [
  'templates-app',
  'templates-common',
  'ui.bootstrap',
  'ui.router',
  'ngMaterial'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/selector' );
  $stateProvider.state('selector',{
    url:'/selector',
    controller: 'SelectorCtrl',
    templateUrl: 'video_selector.tpl.html'
  });
})

.run( function run () {
})

.controller( 'SelectorCtrl', function selectorCtrl ( $scope, $location,$sce ) {

      $scope.init = function(){
        $scope.chapter = {
          name: '测试章节',
          video: {
            pianweishichang:'',
            pianweishijian:  '',
            url:'',
            _id: ''
          }
        };

        $scope.mockSource = [
          {
            name: '三角君的故事',
            url: 'http://yc-course-video.qiniudn.com/5392b064c48cc97c366bc478'
          }
        ];

        var getVideoAvInfo = function(videoUrl){
          return {
            pianweishichang: '30' //秒
          }
        };

        $scope.selectVideo = function(video){
          $scope.chapter.video.pianweishichang = getVideoAvInfo(video.url).pianweishichang;
          $scope.chapter.video.url = video.url;
          $sce.trustAsUrl($scope.chapter.video.url);
          // TODO: $scope.chapter.video.pianweishijian ?? (duration - pianwei) 数学计算生成
          // TODO: $scope.chapter.video._id ?? 传到后端由mongodb生成

        };

      };

})

;

