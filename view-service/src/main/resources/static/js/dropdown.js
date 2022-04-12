<!DOCTYPE html>
<html lang='zh-CN'>
<head>
<title>src/modules/dropdown.js · 贤心/layui - Gitee.com</title>
<meta content='on' http-equiv='x-dns-prefetch-control'>
<link href='//e.gitee.com' rel='dns-prefetch'>
<link href='//files.gitee.com' rel='dns-prefetch'>
<link href='//toscode.gitee.com' rel='dns-prefetch'>
<link href='https://assets.gitee.com' rel='dns-prefetch'>
<link href='https://portrait.gitee.com' rel='dns-prefetch'>
<link rel="shortcut icon" type="image/vnd.microsoft.icon" href="https://assets.gitee.com/assets/favicon-9007bd527d8a7851c8330e783151df58.ico" />
<link rel="canonical" href="https://gitee.com/sentsin/layui" />
<meta content='gitee.com/sentsin/layui git https://gitee.com/sentsin/layui.git' name='go-import'>
<meta charset='utf-8'>
<meta content='always' name='referrer'>
<meta content='Gitee' property='og:site_name'>
<meta content='Object' property='og:type'>
<meta content='http://gitee.com/sentsin/layui/blob/master/src/modules/dropdown.js' property='og:url'>
<meta content='https://gitee.com/static/images/logo_themecolor.png' itemprop='image' property='og:image'>
<meta content='src/modules/dropdown.js · 贤心/layui - Gitee.com' itemprop='name' property='og:title'>
<meta content='一套开源的 Web UI 解决方案。采用自身经典的模块化规范，并遵循原生 HTML/CSS/JS 的开发方式，极易上手，拿来即用。其风格简约轻盈，而组件优雅丰盈，从核心代码到使用方法的每一处细节都经过精心雕琢，非常适合网页界面的快速开发。' property='og:description'>
<meta content='码云,Gitee,代码托管,Git,Git@OSC,Gitee.com,开源,内源,项目管理,版本控制,开源代码,代码分享,项目协作,开源项目托管,免费代码托管,Git代码托管,Git托管服务' name='Keywords'>
<meta content='一套开源的 Web UI 解决方案。采用自身经典的模块化规范，并遵循原生 HTML/CSS/JS 的开发方式，极易上手，拿来即用。其风格简约轻盈，而组件优雅丰盈，从核心代码到使用方法的每一处细节都经过精心雕琢，非常适合网页界面的快速开发。' itemprop='description' name='Description'>
<meta content='pc,mobile' name='applicable-device'>

<meta content="IE=edge" http-equiv="X-UA-Compatible" />
<meta name="csrf-param" content="authenticity_token" />
<meta name="csrf-token" content="lgjUth+wPFiShzpxeXqsea1UIUP7WlFSBDk4jQGSdFh9K5PDroqvnjgYw9twWvjnfpK09SsG23YCrsoKnL5BkA==" />

<link rel="stylesheet" media="all" href="https://assets.gitee.com/assets/application-54ce4441fba8781cba03df22a445f1f0.css" />
<script>
//<![CDATA[
window.gon = {};gon.locale="zh-CN";gon.sentry_dsn=null;gon.baidu_register_hm_push=null;gon.sensor={"server_url":"https://haveaniceday.gitee.com:3443/sa?project=production","page_type":"其他"};gon.info={"controller_path":"blob","action_name":"show","current_user":{"id":9344018,"name":"知水","username":"blackgun","official":false,"admin":false,"avatar_url":"no_portrait.png#知水-blackgun"}};gon.tour_env={"current_user":"blackgun","action_name":"show","original_url":"http://gitee.com/sentsin/layui/blob/master/src/modules/dropdown.js","controller_path":"blob"};gon.http_clone="https://gitee.com/sentsin/layui.git";gon.user_project="sentsin/layui";gon.manage_branch="管理分支";gon.manage_tag="管理标签";gon.enterprise_id=0;gon.create_reaction_path="/sentsin/layui/reactions";gon.ipipe_base_url="https://go-api.gitee.com";gon.gitee_go_active=false;gon.current_project_is_mirror=false;gon.ref="master";
//]]>
</script>
<script src="https://assets.gitee.com/assets/static/sensor-42ae731632c43f0efd3963709358d23f.js"></script>
<script src="https://assets.gitee.com/assets/static/sentry-5.1.0-a823fb0be1b61c5d7ca4a89f0536cb0a.js"></script>
<script src="https://assets.gitee.com/assets/application-90ebb6f158b1e16d40c254454831941d.js"></script>
<script src="https://assets.gitee.com/assets/lib/jquery.timeago.zh-CN-4a4818e98c1978d2419ab19fabcba740.js"></script>

<link rel="stylesheet" media="all" href="https://assets.gitee.com/assets/projects/application-4e0cf3ff22c9fd90a6c5bbdd99cb8053.css" />
<script src="https://assets.gitee.com/assets/projects/app-ec4ead470184e0545203898d37232caa.js"></script>

<script src="//res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
<script>
  var title = document.title.replace(/( - Gitee| - 码云)$/, '')
      imgUrl = '';
  
  document.addEventListener('DOMContentLoaded', function(event) {
    var imgUrlEl = document.querySelector('.readme-box .markdown-body > img, .readme-box .markdown-body :not(a) > img');
    imgUrl = imgUrlEl && imgUrlEl.getAttribute('src');
  
    if (!imgUrl) {
      imgUrlEl = document.querySelector('meta[itemprop=image]');
      imgUrl = imgUrlEl && imgUrlEl.getAttribute('content');
      imgUrl = imgUrl || "https://gitee.com/static/images/logo_themecolor.png";
    }
  
    wx.config({
      debug: false,
      appId: "wxff219d611a159737",
      timestamp: "1648625684",
      nonceStr: "8f5694d660787f80ef8913cac7b0831f",
      signature: "b453f99df84aaea795fb41ff72da9152559407dc",
      jsApiList: [
        'onMenuShareTimeline',
        'onMenuShareAppMessage'
      ]
    });
  
    wx.ready(function () {
      wx.onMenuShareTimeline({
        title: title, // 分享标题
        link: "https://gitee.com/sentsin/layui/blob/master/src/modules/dropdown.js", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: imgUrl // 分享图标
      });
      wx.onMenuShareAppMessage({
        title: title, // 分享标题
        link: "https://gitee.com/sentsin/layui/blob/master/src/modules/dropdown.js", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        desc: document.querySelector('meta[name=Description]').getAttribute('content'),
        imgUrl: imgUrl // 分享图标
      });
    });
    wx.error(function(res){
      console.error('err', res)
    });
  })
</script>

<script type='text/x-mathjax-config'>
MathJax.Hub.Config({
  tex2jax: {
    inlineMath: [['$','$'], ['\\(','\\)']],
    displayMath: [["$$","$$"],["\\[","\\]"]],
    processEscapes: true,
    skipTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
    ignoreClass: "container|files",
    processClass: "markdown-body"
  }
});
</script>
<script src="https://assets.gitee.com/uploads/resources/MathJax-2.7.2/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>

<script>
  (function () {
    var messages = {
      'zh-CN': {
        addResult: '增加 <b>{term}</b>',
        count: '已选择 {count}',
        maxSelections: '最多 {maxCount} 个选择',
        noResults: '未找到结果',
        serverError: '连接服务器时发生错误'
      },
      'zh-TW': {
        addResult: '增加 <b>{term}</b>',
        count: '已選擇 {count}',
        maxSelections: '最多 {maxCount} 個選擇',
        noResults: '未找到結果',
        serverError: '連接服務器時發生錯誤'
      }
    }
  
    if (messages[gon.locale]) {
      $.fn.dropdown.settings.message = messages[gon.locale]
    }
  }());
</script>

<script>
  var userAgent = navigator.userAgent;
  var isLessIE11 = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1;
  if(isLessIE11){
    var can_access = ""
    if (can_access != "true"){
      window.location.href = "/incompatible.html";
    }
  }
  document.addEventListener("error", function (ev) {
    var elem = ev.target;
    if (elem.tagName.toLowerCase() === 'img') {
      elem.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAAAAACIM/FCAAACh0lEQVR4Ae3ch5W0OgyG4dt/mQJ2xgQPzJoM1m3AbALrxzrf28FzsoP0HykJEEAAAUQTBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEkKK0789+GK/I2ezfQB522PnS1qc8pGgXvr4tE4aY0XOUWlGImThWgyCk6DleixzE7qwBkg/MGiDPlVVAyp1VQGrPKiACDhFI6VkF5LmzCki+sg7IwDoglnVAil0IMkeG9CyUiwsxLFUVFzJJOQaKCjFCDN9RXMjIX7W6ztZXZDKKCyn8sWJvH+nca7WHDN9lROlAliPH9iRKCPI4cswFJQWxB46toLQgQ9jhn5QYZA9DOkoMUoQde5YapAxDWkoNYsOQR3KQd9CxUnIQF4S49CB9ENKlBxmDEKsFUgMCCCCAAHIrSF61f6153Ajy8nyiPr8L5MXnmm4CyT2fzN4DUvHZ+ntA2tOQBRBAAAEEEEAAAQQQ7ZBaC6TwSiDUaYHQ2yuB0MN+ft+43whyrs4rgVCjBUKTFshLC6TUAjGA3AxSaYFYLZBOC2RUAsk8h5qTg9QcbEoOsoQhQ2qQhsO5xCD5dgB5JQaZ+KBKGtKecvR81Ic0ZDjByKdDx0rSEDZ/djQbH+bkIdvfJFm98BfV8hD2zprfVdlu9PxVeyYAkciREohRAplJCaRSAplJCcQogTjSAdlyHRBvSAekJR0QRzogA+mADJkOiCPSAPEtqYBshlRAXC43hxix2QiOuEZkVERykGyNo9idIZKE0HO7XrG6OiMShlDWjstVzdPgXtUH9v0CEidAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQP4HgjZxTpdEii0AAAAASUVORK5CYII=";
    }
  }, true);
</script>
</head>

<body class='git-project lang-zh-CN'>
<header class='common-header fixed noborder' id='git-header-nav'>
<div class='ui container'>
<div class='ui menu header-menu header-container'>
<div class='git-nav-expand-bar'>
<i class='iconfont icon-mode-table'></i>
</div>
<div class='gitee-nav__sidebar'>
<div class='gitee-nav__sidebar-container'>
<div class='gitee-nav__sidebar-top'>
<div class='gitee-nav__avatar-box'>
<a href="/blackgun"><img class="ui avatar image blackgun-avatar" avatar="知水-blackgun" />
</a></div>
<div class='gitee-nav__info-box'>
<a href="/blackgun">知水</a>
</div>
</div>
<div class='gitee-nav__sidebar-middle'>
<div class='gitee-nav__sidebar-list'>
<ul>
<li class='gitee-nav__sidebar-item'>
<a href="/blackgun"><i class='iconfont icon-ic-dashboard'></i>
<span class='gitee-nav__sidebar-name'>个人主页</span>
</a></li>
<li class='gitee-nav__sidebar-item'>
<a href="/explore"><i class='iconfont icon-ic-discover'></i>
<span class='gitee-nav__sidebar-name'>开源软件</span>
</a></li>
<li class='gitee-nav__sidebar-item'>
<a href="/enterprises"><i class='iconfont icon-ic-enterprise'></i>
<span class='gitee-nav__sidebar-name'>企业版</span>
</a></li>
<li class='gitee-nav__sidebar-item'>
<a href="/education"><i class='iconfont icon-ic-education'></i>
<span class='gitee-nav__sidebar-name'>高校版</span>
</a></li>
<li class='gitee-nav__sidebar-item split-line'></li>
<li class='gitee-nav__sidebar-item'>
<a href="/search"><i class='iconfont icon-ic-search'></i>
<span class='gitee-nav__sidebar-name'>搜索</span>
</a></li>
<li class='gitee-nav__sidebar-item'>
<a href="/help"><i class='iconfont icon-help-circle'></i>
<span class='gitee-nav__sidebar-name'>帮助中心</span>
</a></li>
<li class='gitee-nav__sidebar-item'>
<a href="/terms"><i class='iconfont icon-file'></i>
<span class='gitee-nav__sidebar-name'>使用条款</span>
</a></li>
<li class='gitee-nav__sidebar-item'>
<a href="/about_us"><i class='iconfont icon-issuepx'></i>
<span class='gitee-nav__sidebar-name'>关于我们</span>
</a></li>
<li class='gitee-nav__sidebar-item'>
<a href="/profile/account_information"><i class='iconfont icon-edit'></i>
<span class='gitee-nav__sidebar-name'>设置</span>
</a></li>
<li class='gitee-nav__sidebar-item'>
<a rel="nofollow" data-method="delete" href="/logout"><i class='iconfont icon-ic-logout'></i>
<span class='gitee-nav__sidebar-name'>
退出
</span>
</a></li>
</ul>
</div>
</div>
<div class='gitee-nav__sidebar-bottom'>
<div class='gitee-nav__sidebar-close-button'>
<i class='fa fa-angle-double-left'></i>
</div>
</div>
</div>
</div>

<div class='item gitosc-logo'>
<a href="https://gitee.com"><img alt='Gitee — 基于 Git 的代码托管和研发协作平台' class='ui inline image' height='28' src='/static/images/logo.svg?t=158106664' title='Gitee — 基于 Git 的代码托管和研发协作平台' width='95'>
<img alt='Gitee — 基于 Git 的代码托管和研发协作平台' class='ui inline black image' height='28' src='/static/images/logo-black.svg?t=158106664' title='Gitee — 基于 Git 的代码托管和研发协作平台' width='95'>
</a></div>
<a title="开源软件" class="item " href="/explore">开源软件
</a><a title="企业版" class="item " href="/enterprises">企业版
<sup class='ui red label'>
特惠
</sup>
</a><a title="高校版" class="item " href="/education">高校版
</a><a title="私有云" class="item" target="_blank" href="https://gitee.cn?utm_source=giteecom">私有云
</a><a title="博客" class="item" id="gitee-blog" target="_blank" href="https://blog.gitee.com/?utm_sources=site_nav">博客
</a><div class='dropdown item ui' id='my-gitee-dropdown'>
<a href="/">我的</a>
<i class='dropdown icon'></i>
<div class='menu'>
<div class='ui active dimmer inverted js-my-gitee-dropdown-loader'>
<div class='ui loader'></div>
</div>
<div class='header user-enterprises'>
<a class="pull-right" target="_blank" href="/blackgun/dashboard/enterprises">全部</a>
企业
<span class='count'></span>
</div>
<div class='disabled item tip user-enterprises'>
无企业
</div>
<div class='header user-groups'>
<a class="pull-right" target="_blank" href="/blackgun/dashboard/groups">全部</a>
组织
<span class='count'></span>
</div>
<div class='disabled item tip user-groups'>
无组织
</div>
<div class='header user-programs'>
项目
<span class='count'></span>
</div>
<div class='disabled item tip user-programs'>
<span class="translation_missing" title="translation missing: zh-CN.layouts.header.empty_programs">Empty Programs</span>
</div>
<div class='header user-projects'>
<a class="pull-right" target="_blank" href="/blackgun/projects">全部</a>
仓库
<span class='count'></span>
</div>
<div class='disabled item tip user-projects'>
无项目
</div>
</div>
</div>
<div class='center responsive-logo'>
<a href="https://gitee.com"><img alt='Gitee — 基于 Git 的代码托管和研发协作平台' class='ui inline image' height='24' src='/static/images/logo.svg?t=158106664' title='Gitee — 基于 Git 的代码托管和研发协作平台' width='85'>
<img alt='Gitee — 基于 Git 的代码托管和研发协作平台' class='ui inline black image' height='24' src='/static/images/logo-black.svg?t=158106664' title='Gitee — 基于 Git 的代码托管和研发协作平台' width='85'>
</a></div>
<div class='right menu userbar right-header' id='git-nav-user-bar'>
<form class="ui item" id="navbar-search-form" data-text-require="搜索关键字不能少于1个" data-text-filter="搜索格式不正确" action="/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
<input type="hidden" name="type" id="navbar-search-type" />
<input type="hidden" name="fork_filter" id="fork_filter" value="on" />
<div class='ui search header-search'>
<input type="text" name="q" id="navbar-search-input" value="" class="prompt" placeholder="搜开源" />
</div>
</form>

<script>
  var can_search_in_repo = 1,
      repo = "VFZSWk0wMXFhekpQVjBVelRtcE9iV0UzTmpObWE3NjNm",
      reponame = "sentsin/layui";
  
  $(function() {
    var $search = $('#navbar-search-form .ui.search');
    $search.search({
      apiSettings: {
        url: '/search/relative_project?q={query}',
        onResponse: function (res) {
          if (res && res.status === 200 && res.data) {
            var query = htmlSafe($search.search('get value'));
  
            res.data.map(function (item) {
              item.path_ns = '/' + item.path_ns;
              item.icon = 'iconfont icon-project-public';
            });
            res.data.unshift({
              name_ns: "在全站搜索 <b class='hl'>" + query +"</b> 相关项目",
              path_ns: '/search?fork_filter=on&q=' + query,
              icon: 'iconfont icon-search'
            });
            return res;
          } else {
            return { data: [] };
          }
        }
      },
      fields: {
        results: 'data',
        description: 'name_ns',
        url: 'path_ns',
        icon: 'icon'
      },
      minCharacters: 1,
      maxResults: 10,
      searchDelay: 250,
      showNoResults: false,
      transition: 'fade'
    });
  });
</script>

<div class='item ui dropdown empty' data-count-path='/notifications/unread_count' data-enable data-mark-notice-path='/notifications/mark' id='notice-dropdown'>
<a class="remind-button" href="/notifications"><i class='iconfont icon-remind'></i>
<div class='notice-count total'></div>
</a><div class='notice-dropdown-panel menu'>
<div class='notice-dropdown-panel-header'>
<div class='tab active' data-data-path='/notifications/notices?scope=referer' data-html-path='/notifications/referer' data-scope='referer'>
<div class='content'>
@ 我
<div class='notice-count referer'></div>
</div>
</div>
<div class='tab' data-data-path='/notifications/notices?scope=infos' data-html-path='/notifications/infos' data-scope='infos'>
<div class='content'>
通知
<div class='notice-count infos'></div>
</div>
</div>
<div class='tab' data-data-path='/notifications/notices?scope=messages' data-html-path='/notifications/messages' data-scope='messages'>
<div class='content'>
私信
<div class='notice-count messages'></div>
</div>
</div>
</div>
<div class='item notice-dropdown-panel-container'>
<div class='ui dimmer over active'>
<div class='ui loader'></div>
</div>
<div class='notice-list'></div>
<div class='notice-dropdown-panel-blank'>
暂没有新消息
</div>
</div>
<div class='notice-dropdown-panel-footer'>
<div class='action'>
<div class='side left'>
<a class="mark-notices" href="javascript: void(0);">当前标记为已读
</a></div>
<div class='side right'>
<a class="load-all" target="_blank" href="javascript: void(0);">查看全部
</a></div>
</div>
</div>
</div>
</div>

<div class='ui item' id='feature-update-notice'>
<div class='notice-update-icon'>
<a class="notice-update-popup click-knowed" title="" href="javascript:void(0)"><img alt="功能更新" title="" class="bubl_icon bubl-off-icon" src="https://assets.gitee.com/assets/bulb_off-24ee940be20998aace89a3f040cbc704.svg" />
<img alt="功能更新" title="" class="bubl_icon bubl-on-icon" src="https://assets.gitee.com/assets/bulb_on-3986b1dc417285398e3d15671bd8f261.svg" />
</a></div>
<div class='feature-update-notice-panel menu'>
<div class='notice-img'>
<img alt="" title="" class="notice-img-show" src="" />
</div>
<div class='notice-update-title'></div>
<div class='notice-update-des'></div>
<div class='notice-btn-list d-flex-between'>
<button name="button" type="button" class="ui basic orange button btn-notice btn-knowed click-knowed" style="margin-right: 0">我知道了</button>
<a class="ui button orange btn-notice btn-details click-knowed" target="_blank" href="">查看详情</a>
</div>
</div>
</div>

<div class='ui dropdown link item' id='git-nav-create'>
<i class='iconfont icon-add-thin'></i>
<div class='right menu'>
<a class="item" href="/projects/new"><i class='add square icon'></i>
新建仓库
</a><a class="item" href="/blackgun/codes/new"><i class='code icon'></i>
发布代码片段
</a><a class="item" href="/organizations/new"><i class='group icon'></i>
创建组织
</a><a class="item" href="/enterprises/new"><i class='icon iconfont icon-enterprise'></i>
开通企业版
</a><a class="item" href="/projects/import/url"><i class='github icon'></i>
从 GitHub / GitLab 导入仓库
</a></div>
</div>
<div class='ui dropdown item' id='git-nav-user'>
<img class="ui avatar image" avatar="知水-blackgun" />
<i class='dropdown icon'></i>
<div class='right menu'>
<a class="item" href="/blackgun"><i class='iconfont icon-ic-home'></i>
个人主页
</a><a class="item" href="/blackgun/starred"><i class='iconfont icon-star'></i>
我的星选集
</a><a class="item" href="/profile/account_information"><div class='mayun-icon my-ic-edit my-ic-edit-dims'></div>
设置
</a><div class='divider'></div>
<a class="item" target="_blank" href="https://gitee.com/help"><div class='mayun-icon my-ic-help my-ic-help-dims'></div>
帮助
</a><div class='divider'></div>
<a class="item destroy-user-session" rel="nofollow" data-method="delete" href="/logout"><div class='mayun-icon my-ic-exit my-ic-exit-dims'></div>
退出
</a></div>
</div>
<script>
  $('.destroy-user-session').on('click', function() {
    $.cookie('access_token', null, { path: '/' });
  })
</script>

</div>
</div>
</div>
</header>
<script>
  Gitee.initNavbar()
  Gitee.initRepoRemoteWay()
  $.cookie('user_locale',null)
</script>

<script>
  var userAgent = navigator.userAgent;
  var isLessIE11 = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1;
  if(isLessIE11){
    var can_access = ""
    if (can_access != "true"){
      window.location.href = "/incompatible.html";
    }
  }
</script>

<div class='fixed-notice-infos'>
<div class='all-messages'>
</div>
<div class='ui container'>
<div class='flash-messages' id='messages-container'></div>
</div>
<script>
  (function() {
    $(function() {
      var $error_box, alertTip, notify_content, notify_options, template;
      template = '<div data-notify="container" class="ui {0} message" role="alert">' + '<i data-notify="dismiss" class="close icon"></i>' + '<span data-notify="message">{2}</span>' + '</div>';
      notify_content = null;
      notify_options = {};
      alertTip = '';
      $error_box = $(".flash_error.flash_error_box");
      if (notify_options.type === 'error' && $error_box.length > 0 && !$.isEmptyObject(notify_content.message)) {
        if (notify_content.message === 'captcha_fail') {
          alertTip = "验证码不正确";
        } else if (notify_content.message === 'captcha_expired') {
          alertTip = "验证码已过期，请点击刷新";
        } else if (notify_content.message === 'not_found_in_database') {
          alertTip = "帐号或者密码错误";
        } else if (notify_content.message === 'not_found_and_show_captcha') {
          alertTip = "帐号或者密码错误";
        } else if (notify_content.message === 'phone_captcha_fail') {
          alertTip = "手机验证码不通过";
        } else {
          alertTip = notify_content.message;
        }
        return $error_box.html(alertTip).show();
      } else if (notify_content) {
        if ("show" === 'third_party_binding') {
          return $('#third_party_binding-message').html(notify_content.message).addClass('ui message red');
        }
        notify_options.delay = 3000;
        notify_options.template = template;
        notify_options.offset = {
          x: 10,
          y: 30
        };
        notify_options.element = '#messages-container';
        return $.notify(notify_content, notify_options);
      }
    });
  
  }).call(this);
</script>

</div>
<script>
  (function() {
    $(function() {
      var setCookie;
      setCookie = function(name, value) {
        $.cookie(name, value, {
          path: '/',
          expires: 365
        });
      };
      $('#remove-bulletin, #remove-bulletin-dashboard').on('click', function() {
        setCookie('remove_bulletin', "gitee-maintain-1647842719");
        $('#git-bulletin').hide();
      });
      $('#remove-member-bulletin').on('click', function() {
        setCookie('remove_member_bulletin', "gitee_member_bulletin");
        $(this).parent().hide();
      });
      return $('#remove-gift-bulletin').on('click', function() {
        setCookie('remove_gift_bulletin', "gitee-gift-bulletin");
        $(this).parent().hide();
      });
    });
  
  }).call(this);
</script>
<script>
  function closeMessageBanner(pthis, type, val) {
    var json = {}
  
    val = typeof val === 'undefined' ? null : val
    $(pthis).parent().remove()
    if (type === 'out_of_enterprise_member') {
      json = {type: type, data: val}
    } else if (type === 'enterprise_overdue') {
      json = {type: type, data: val}
    }
    $.post('/profile/close_flash_tip', json)
  }
</script>

<div class='site-content'>
<div class='git-project-header'>
<div class='fixed-notice-infos'>
<div class='ui info icon floating message green' id='fetch-ok' style='display: none'>
<div class='content'>
<div class='header status-title'>
<i class='info icon status-icon'></i>
代码拉取完成，页面将自动刷新
</div>
</div>
</div>
<div class='ui info icon floating message error' id='fetch-error' style='display: none'>
<div class='content'>
<div class='header status-title'>
<i class='info icon status-icon'></i>
<span class='error_msg'></span>
</div>
</div>
</div>
</div>
<div class='ui container'>
<div class='git-project-categories'>
<a href="/explore">开源项目</a>
<span class='symbol'>></span>
<a href="/explore/web-app-develop">WEB应用开发</a>
<span class='symbol'>&gt;</span>
<a href="/explore/webui">WebUI组件/框架</a>
<span class='symbol'>&amp;</span>
<a href="/explore/layui-components">layui 组件</a>
<span class='symbol and-symbol'>&&</span>
</div>

<div class='git-project-header-details'>
<div class='git-project-header-container'>
<div class='git-project-header-actions'>
<div class='ui small modal project-donate-modal' id='project-donate-modal'>
<div class='content form-wrapper ui custom form'>
<div class='ui inverted dimmer'>
<div class='ui loader'></div>
</div>
<h3 class='ui creator info header'>
<img class="ui circular image" src="https://portrait.gitee.com/uploads/avatars/user/30/92529_sentsin_1578917144.jpg!avatar100" alt="92529 sentsin 1578917144" />
<div class='content'>
<a target="_blank" class="name" href="/sentsin">贤心
</a><p>
仓库: layui
</p>
<div class='ui sub header'>
(已获得 102 次捐赠)
</div>
</div>
</h3>
<p class='donate-description'>
<span class='mayun-icon my-ic-coffee my-ic-coffee-dims'></span>
项目的发展离不开你的支持，请作者喝杯咖啡吧！
</p>
<p class='donate-notice'>
您捐赠的钱将 100% 付给项目的作者。
</p>
<div class='ui form'>
<div class='inline field'><label>
捐赠金额(元):
</label><div class='card-fields nocheckbox'><div class='card-field'>
<div class='ui radio checkbox'>
<input type="radio" name="ensure_cash" id="ensure_cash_10" value="10" checked="checked" /><label>10</label>
</div>
</div>
<div class='card-field'>
<div class='ui radio checkbox'>
<input type="radio" name="ensure_cash" id="ensure_cash_20" value="20" /><label>20</label>
</div>
</div>
<div class='card-field'>
<div class='ui radio checkbox'>
<input type="radio" name="ensure_cash" id="ensure_cash_50" value="50" /><label>50</label>
</div>
</div>
<div class='card-field'>
<div class='ui radio checkbox'>
<input type="radio" name="ensure_cash" id="ensure_cash_manual" value="manual" /><label>其它</label>
</div>
</div></div>
</div>
<div class='inline field' style='display: none'>
<div class='ui labeled fluid input'>
<div class='ui basic label'>其它金额</div>
<input type="number" name="manual_cash" id="manual_cash" value="100" placeholder="&gt;1" min="1" max="50000" />
</div>
</div>
<div class='inline field'><label>
捐赠人:
</label><div class='ui fluid input'><input type="text" name="name" id="name" value="知水" placeholder="捐赠人的名称" required="required" readonly="readonly" /></div>
<div class='ui error text message name-message'></div>
</div>
<div class='inline textarea field'><label>
留言:
</label><textarea maxlength='50' name='msg' placeholder='对作者说点什么' required rows='3'>感谢您的开源项目！</textarea>
</div>
<div class='inline pay method field'><label>
支付类型:
</label><div class='ui radio checkbox' title='支付宝'>
<input type="radio" name="pay_type" id="pay_type_alipay" value="alipay" />
<label>
<div class='mayun-icon my-ic-alipay my-ic-alipay-dims'></div>
</label>
</div>
<div class='ui radio checkbox' title='微信'>
<input type="radio" name="pay_type" id="pay_type_wepay" value="wepay" checked="checked" />
<label>
<div class='mayun-icon my-ic-wepay my-ic-wepay-dims'></div>
</label>
</div>
</div>
</div>
</div>
<div class='actions donate-actions'>
<button class='ui orange large pay approve button'>
&emsp;捐赠&emsp;
</button>
&emsp;
<a class="cancel" href="javascript:void(0)">取消</a>
</div>
</div>
<div class='ui small modal wepay-qrcode'>
<i class='iconfont icon-close close'></i>
<div class='header'>
扫描微信二维码支付
<span class='wepay-cash'></span>
</div>
<div class='content weqcode-center'>
<img id='wepay-qrcode' src=''>
</div>
<div class='actions'>
<div class='ui cancel blank button'>取消</div>
<div class='ui ok orange button'>支付完成</div>
</div>
</div>
<div class='ui mini modal' id='confirm-alipay-modal'>
<div class='header'>支付提示</div>
<div class='content'>
将跳转至支付宝完成支付
</div>
<div class='actions'>
<div class='ui approve orange button'>确定</div>
<div class='ui blank cancel button'>取消</div>
</div>
</div>

<span class='ui buttons basic watch-container'>
<div class='ui dropdown button js-project-watch' data-watch-type='unwatch'>
<input type='hidden' value=''>
<i class='iconfont icon-watch'></i>
<div class='text'>
Watch
</div>
<i class='dropdown icon'></i>
<div class='menu'>
<a data-value="unwatch" class="item" data-remote="true" rel="nofollow" data-method="post" href="/sentsin/layui/unwatch"><i class='iconfont icon-msg-read'></i>
不关注
</a><a data-value="watching" class="item" data-remote="true" rel="nofollow" data-method="post" href="/sentsin/layui/watch"><i class='iconfont icon-msg-read'></i>
关注所有动态
</a><a data-value="releases_only" class="disabled item" data-remote="true" rel="nofollow" data-method="post" href="/sentsin/layui/release_only_watch"><i class='iconfont icon-msg-read'></i>
仅关注版本发行动态
</a><a data-value="ignoring" class="item" data-remote="true" rel="nofollow" data-method="post" href="/sentsin/layui/ignoring_watch"><i class='iconfont icon-msg-read'></i>
关注但不提醒动态
</a></div>
</div>
<style>
  .js-project-watch .text .iconfont {
    display: none; }
  .js-project-watch a, .js-project-watch a:hover {
    color: #000; }
  .js-project-watch .item > .iconfont {
    visibility: hidden;
    margin-left: -10px; }
  .js-project-watch .selected .iconfont {
    visibility: visible; }
  .js-project-watch .menu {
    margin-top: 4px !important; }
</style>
<script>
  $('.js-project-watch').dropdown({
    action: 'select',
    onChange: function(value, text, $selectedItem) {
      var type = value === 'unwatch' ? 'Watch' : 'Watching';
      $(this).children('.text').text(type);
      $(this).dropdown('set selected', value)
    }
  });
</script>

<a class="ui button action-social-count" title="2183" href="/sentsin/layui/watchers">2.2K
</a></span>
<span class='basic buttons star-container ui'>
<a class="ui button unstar " sa_evt="clickStar" sa_location="其他" sa_url="" sa_repo_id="1672969" data-remote="true" rel="nofollow" data-method="post" href="/sentsin/layui/unstar"><i class='iconfont icon-star-solid'></i>
Starred
</a><a class="ui button star " sa_evt="clickStar" sa_location="其他" sa_url="" sa_repo_id="1672969" data-remote="true" rel="nofollow" data-method="post" href="/sentsin/layui/star"><i class='iconfont icon-star'></i>
Star
</a><a class="ui button action-social-count " title="11971" href="/sentsin/layui/stargazers">12K
</a></span>
<span class='ui basic buttons fork-container' title=''>
<a id="fork-top-button" class="ui button fork " sa_evt="repoFork" sa_repo_id="1672969" sa_is_self="false" sa_is_member="false" href="#"><i class='iconfont icon-fork'></i>
Fork
</a><a class="ui button action-social-count " title="2720" href="/sentsin/layui/members">2.7K
</a></span>
</div>
<h2 class='git-project-title mt-0 mb-0'>
<a title="GVP - Gitee 最有价值开源项目" class="ui small label git-project-gvp-badge" target="_blank" href="/gvp">GVP</a><a title="贤心" class="author" href="/sentsin">贤心</a> / <a title="layui" class="repository" target="" style="padding-bottom: 0px; margin-right: 4px" sa_evt="repoClick" sa_location="其他" sa_url="" sa_repo_id="1672969" href="/sentsin/layui">layui</a>
<input type="hidden" name="recomm_at" id="recomm_at" value="2017-02-21 08:53" />
<input type="hidden" name="project_title" id="project_title" value="贤心/layui" />
</h2>
</div>
</div>
</div>
<div class='ui small modal long' id='modal-fork-project'>
<i class='icon-close iconfont close'></i>
<div class='header'>
Fork 仓库
</div>
<div class='content fork-project-content'>
<div class='fork-info-content'>
<div class='ui segment fork_project_loader'>
<div class='ui active inverted dimmer'>
<div class='ui text loader'>加载中</div>
</div>
</div>
</div>
</div>
<div class='actions fork-action d-flex-between hide'>
<div>
</div>
<div>
<a class='cancel'>&emsp;取消&emsp;</a>
<div class='ui disabled button orange ok'>&emsp;确认&emsp;</div>
</div>
</div>
</div>
<script>
  var title_import_url = "https://github.com/sentsin/layui.git";
  var title_post_url = "/sentsin/layui/update_import";
  var title_fork_url = "/sentsin/layui/sync_fork";
  var title_project_path = "layui";
  var title_p_name = "layui";
  var title_p_id= "1672969";
  var title_description = "一套开源的 Web UI 解决方案。采用自身经典的模块化规范，并遵循原生 HTML/CSS/JS 的开发方式，极易上手，拿来即用。其风格简约轻盈，而组件优雅丰盈，从核心代码到使用方法的每一处细节都经过精心雕琢，非常适合网页界面的快速开发。";
  var title_form_authenticity_token = "a073mTsSVZxUI+uqHKOnwaC3iqcLxxab3iF+YxN8EfyAbbDsiijGWv68EgAVg/Nfc3EfEdubnL/YtozkjlAkNA==";
  var watch_type = "unwatch";
  var checkFirst = false;
  
  $('.js-project-watch').dropdown('set selected', watch_type);
  $('.checkbox.sync-wiki').checkbox();
  $('.checkbox.team-member-checkbox').checkbox();
</script>
<script>
  $(function () {
    // SemticUI 校验表单等地方要求直接return 值, 对异步支持非常不友好...
    // 从提交表单处 再用异步校验 ,控制是否提交
    var $modalFork = $('#modal-fork-project');
    var $okBtn = $modalFork.find('.ui.ok.button');
    var $currentTarget = null;
    var isSameProject = false;
  
    $('#fork-top-button, #fork-btm-button').on('click', function (e) {
      e.preventDefault();
      $modalFork.modal('show');
      setTimeout(function () {
        $.ajax({ url: '/sentsin/layui/fork_project_info' }).done(function () {
          // 自定义错误消息模板,  inline : true 每个输入框后面都插入消息提示, 而非集中到一处提醒
          $.fn.form.settings.templates.prompt = function (errors) {
            return $('<div />').addClass('ui error message custom prompt label').html(errors[0]);
          };
          // 表单的内容是异步传输的js动态生成的....
          var $repoForm = $('#modal-fork-project .repo-form');
          $repoForm.form({
            on: 'change',
            inline: true,
            fields: {
              projectName: {
                identifier: 'project-name',
                rules: [
                  {
                    type: 'empty',
                    prompt: "仓库名不能为空"
                  },
                  {
                    type: 'regExp',
                    value: window.giteeRegex.projectName,
                    prompt: "仓库名只允许包含中文、字母、数字或者下划线(_)、中划线(-)、英文句号(.)、加号(+)，必须以字母或数字开头，不能以下划线/中划线结尾，且长度为2~191个字符"
                  },
                  {
                    type: 'maxLength[255]',
                    prompt: "仓库名只允许包含中文、字母、数字或者下划线(_)、中划线(-)、英文句号(.)、加号(+)，必须以字母或数字开头，不能以下划线/中划线结尾，且长度为2~191个字符"
                  }
                ]
              },
              projectPath: {
                identifier: 'project-path',
                rules: [
                  {
                    type: 'empty',
                    prompt: "路径不能为空"
                  },
                  {
                    type: 'regExp',
                    value: window.giteeRegex.projectPath,
                    prompt: "路径只允许包含字母、数字或者下划线(_)、中划线(-)、英文句号(.)，必须以字母开头，且长度为2~191个字符"
                  }
                ]
              }
            }
          });
  
          $modalFork.find('.namespace-img-area.ui.checkbox').checkbox({
            onChecked: function () {
              $currentTarget = $(this).closest('.ui.checkbox');
              // 当前选中的空间
              isSameProject = $currentTarget[0].hasAttribute('data-any-same-projects');
              var conflictProjectName = $currentTarget.data('conflict-project-title');
              var conflictProjectUrl = $currentTarget.data('conflict-project-url');
              var conflictProjectNameSpacePath = $currentTarget.data('conflict-namespace');
              var conflictPathType = $currentTarget.find('.path-type').text();
              // fork目标
              var targetProjectName = $currentTarget.data('target-project-name');
              var targetProjectPath = $currentTarget.data('target-project-path');
              // 命名空间名称(@xxx)
              var conflictNameSpaceName = $currentTarget.find('.path-name').text();
              var $forkTargetNamespace = $('.fork-target-namespace-area');
              var $forkTargetNamespaceItem = $(this).closest('.fork-target-namespace-item')
              // 冲突 显示修改表单
              if (isSameProject) {
                //$forkTargetNamespace.addClass('same-name-editing');
                $('.fork-target-namespace-item').removeClass('same-name-editing')
                $forkTargetNamespaceItem.addClass('same-name-editing')
                $forkTargetNamespace
                  .find('.conflict-namespace-name')
                  .attr('href', `/${conflictProjectNameSpacePath}`)
                  .text(conflictNameSpaceName);
                $forkTargetNamespace
                  .find('.conflict-path')
                  .attr('href', `${conflictProjectUrl}`)
                  .text(`${conflictProjectNameSpacePath}/${targetProjectPath}`);
                $forkTargetNamespace
                  .find('.prefix-path')
                  .text(`${window.location.origin}/${conflictProjectNameSpacePath}/`);
                $forkTargetNamespace
                  .find('.conflict-path-type')
                  .text(conflictPathType.toLowerCase())
                var $nameInput = $forkTargetNamespace.find('[name="project-name"]');
                var $pathInput = $forkTargetNamespace.find('[name="project-path"]');
                $nameInput.val(targetProjectName);
                $pathInput.val(targetProjectPath);
                checkFirst = true
                // 立即校验一次
                asyncValidateForkRepoForm();
              } else {
                $('.fork-target-namespace-item').removeClass('same-name-editing')
                $forkTargetNamespaceItem.addClass('same-name-editing');
              }
              $okBtn.removeClass('disabled');
            }
          });
        });
      }, 500);
    });
    // 异步校验
    function asyncValidateForkRepoForm (successCallback) {
      var $repoForm = $('#modal-fork-project .same-name-editing .repo-form');
      var $forkTargetNamespace = $('.fork-target-namespace-area .same-name-editing');
      var $nameInput = $forkTargetNamespace.find('[name="project-name"]');
      var $pathInput = $forkTargetNamespace.find('[name="project-path"]');
      var name = $nameInput.val().trim();
      var path = $pathInput.val().trim();
      var namespace = $currentTarget ? $currentTarget.data('conflict-namespace') : '';
      if (!name || !path) return;
      $okBtn.addClass('loading');
      $.ajax('/projects/check_fork_form', {
        type: 'get',
        data: { project_name: name, project_path: path, target_namespaces: namespace },
        success: function (data) {
          if (data.status == 0) {
            successCallback && successCallback();
          } else if (data.status == -1 && Array.isArray(data.conflict_keys)) {
            if (!checkFirst) {
              data.conflict_keys.includes('name') && $repoForm.form('add prompt', 'project-name', "已存在相同仓库名");
              data.conflict_keys.includes('path') && $repoForm.form('add prompt', 'project-path', "已存在相同路径");
            } else {
              data.conflict_keys.includes('name') && data.new_name && $nameInput.val(data.new_name);
              data.conflict_keys.includes('path') && data.new_path && $pathInput.val(data.new_path);
            }
          } else {
            Flash.error("校验失败");
          }
          checkFirst = false
        },
        error: function (err) {
          Flash.error(err.responseJSON.message);
        },
        complete: function () {
          $okBtn.removeClass('loading');
          // 添加提示 弹窗变高后 刷新弹窗位置
          $modalFork.modal('refresh');
        }
      });
    }
    function forkSubmit () {
      $modalFork.modal('hide');
      // 构造一些 input 用于表单提交
      var $form = $('<form></form>');
      var $input = $('<input type="hidden" name="authenticity_token" />');
      var $inputCheck = $('<input type="hidden" name="members" />');
      var $inputCheck2 = $('<input type="hidden" name="namespace_path" />');
      var checkedPath = $('.checkbox.checked > input[name=namespace_path]').val();
      // fork存在冲突, 修改后的表单:
      if (isSameProject) {
        // 获取最新表单数据
        var $forkTargetNamespace = $('.fork-target-namespace-area .same-name-editing');
        var name = $forkTargetNamespace.find('[name="project-name"]').val().trim();
        var path = $forkTargetNamespace.find('[name="project-path"]').val().trim();
        var $projectName = $('<input type="hidden" name="name" />');
        var $projectPath = $('<input type="hidden" name="path" />');
        $projectName.val(name);
        $projectPath.val(path);
        $form.append($projectName);
        $form.append($projectPath);
      }
      $form.hide();
      $form.attr('method', 'post');
      $form.attr('action', '/' + checkedPath + '/fork_project/sentsin/layui');
      $input.attr('value', $('meta[name="csrf-token"]').attr('content'));
      $inputCheck.attr('value', $('.checkbox.checked > input[name=members]').val());
      $inputCheck2.attr('value', checkedPath);
      $form.append($input);
      $form.append($inputCheck);
      $form.append($inputCheck2);
      $form.appendTo('body');
      $form.submit();
    }
    $modalFork.modal({
      transition: 'fade',
      closable: true,
      centered: false,
      observeChanges:true,
      onApprove: function () {
        // 存在同名冲突时, 需要修改仓库信息, 再进行校验同名
        // 判断当前选中的空间类型, 用于决定是否需要修改路径仓库名,验证表单
        if (isSameProject) {
          var $repoForm = $('#modal-fork-project .same-name-editing .repo-form');
          $repoForm.form('validate form');
          var isRepoInfoValid = $repoForm.form('is valid'); // 前端校验通过
          // 由于是form提交和ajax检测结合..., 防止意外篡改 提交前必定校验一次, 通过后自动submit
          if (isRepoInfoValid) {
            // SemticUI add prompt 自定义验证连续执行太快, 会消失掉重复再出现再消失.
            setTimeout(function () {
              asyncValidateForkRepoForm(function () {
                forkSubmit();
              });
            }, 200);
          } else {
            $repoForm.form('validate form');
          }
        } else {
          // 正常 frok
          forkSubmit();
        }
        return false;
      }
    });
    $modalFork.find('.close-button').on('click', function () {
      $modalFork.modal('hide');
    });
  });
</script>
<style>
  i.loading, .icon-sync.loading {
    -webkit-animation: icon-loading 1.2s linear infinite;
    animation: icon-loading 1.2s linear infinite;
  }
  .qrcode_cs {
    float: left;
  }
  .check-sync-wiki {
    float: left;
    height: 28px;
    line-height: 28px;
  }
  .sync-wiki-warn {
    color: #e28560;
  }
</style>

<div class='git-project-nav'>
<div class='ui container'>
<div class='ui secondary pointing menu'>
<a class="item active" href="/sentsin/layui"><i class='iconfont icon-code'></i>
代码
</a><a class="item " href="/sentsin/layui/issues"><i class='iconfont icon-task'></i>
Issues
<span class='ui mini circular label'>
3325
</span>
</a><a class="item " href="/sentsin/layui/pulls"><i class='iconfont icon-pull-request'></i>
Pull Requests
<span class='ui mini circular label'>
42
</span>
</a><a class="item " href="/sentsin/layui/wikis"><i class='iconfont icon-wiki'></i>
Wiki
</a><a class="item  " href="/sentsin/layui/graph/master"><i class='iconfont icon-statistics'></i>
统计
</a><div class='item project-devops-item'>
<div class='ui pointing top right dropdown project-devops-dropdown'>
<div class='text'>
<i class='iconfont icon-devops'></i>
DevOps
</div>
<i class='dropdown icon'></i>
<div class='menu' style='display:none'>
<a class="item" href="/sentsin/layui/gitee_go"><img src="https://assets.gitee.com/assets/giteego-7ec42270742374f05850d0d3ad09e303.png" alt="Giteego" />
<div class='item-title'>
流水线
</div>
</a><a class="item" target="_blank" href="https://gitee.com/help/articles/4285"><img src="https://assets.gitee.com/assets/baidu_efficiency_cloud-81a98c2eb67fac83b1453ca3d2feb326.svg" alt="Baidu efficiency cloud" />
<div class='item-title'>
百度效率云
</div>
</a><a class="item" target="_blank" href="https://gitee.com/help/articles/4318"><img src="https://assets.gitee.com/assets/cloudbase-1197b95ea3398aff1df7fe17c65a6d42.png?20200925" alt="Cloudbase" />
<div class='item-title'>
腾讯云托管
</div>
</a><a class="item" target="_blank" href="https://gitee.com/help/articles/4330"><img src="https://assets.gitee.com/assets/cloud_serverless-686cf926ced5d6d2f1d6e606d270b81e.png" alt="Cloud serverless" />
<div class='item-title'>
腾讯云 Serverless
</div>
</a><a class="item" target="_blank" href="https://gitee.com/help/articles/4193"><img src="https://assets.gitee.com/assets/jenkins_for_gitee-554ec65c490d0f1f18de632c48acc4e7.png" alt="Jenkins for gitee" />
<div class='item-title'>
Jenkins for Gitee
</div>
</a></div>
</div>
</div>
<div class='item'>
<div class='ui pointing top right dropdown git-project-service'>
<div>
<i class='iconfont icon-service'></i>
服务
<i class='dropdown icon'></i>
</div>
<div class='menu' style='display:none'>
<a class="item" href="/sentsin/layui/pages"><img src="/static/images/logo-en.svg" alt="Logo en" />
<div class='item-title'>
Gitee Pages
</div>
</a><a class="item" href="/sentsin/layui/quality_analyses?platform=sonar_qube"><img src="https://assets.gitee.com/assets/sonar_mini-5e1b54bb9f6c951d97fb778ef623afea.png" alt="Sonar mini" />
<div class='item-title'>
质量分析
</div>
</a><a class="item" href="/sentsin/layui/gitee_scans"><img src="https://assets.gitee.com/assets/giteescan-cd9ab4076bd751faf7e30888eb10f782.png" alt="Giteescan" />
<div class='item-title'>Gitee Scan</div>
</a><button class='ui orange basic button quit-button' id='quiting-button'>
我知道了，不再自动展开
</button>
</div>
</div>
</div>
</div>
</div>
</div>
<script>
  $('.git-project-nav .ui.dropdown').dropdown({ action: 'nothing' });
  var gitee_reward_config = JSON.parse(localStorage.getItem('gitee_reward_config') || null) || false
  var $settingText = $('.setting-text')
  // 如果没有访问过
  if(!gitee_reward_config) $settingText.addClass('red-dot')
</script>
<style>
  .git-project-nav i.checkmark.icon {
    color: green;
  }
  #quiting-button {
    display: none;
  }
  
  .git-project-nav .dropdown .menu.hidden:after {
    visibility: hidden !important;
  }
</style>
<script>
  isSignIn = true
  isClickGuide = true
  $('#git-versions.dropdown').dropdown();
  $.ajax({
    url:"/sentsin/layui/access/add_access_log",
    type:"GET"
  });
  $('#quiting-button').on('click',function() {
    $('.git-project-service').click();
    if (isSignIn) {
      $.post("/projects/set_service_guide")
    }
    $.cookie("Serve_State", true, { expires: 3650, path: '/'})
    $('#quiting-button').hide();
  });
  if (!(isClickGuide || $.cookie("Serve_State") == 'true')) {
    $('.git-project-service').click()
    $('#quiting-button').show()
  }
</script>

</div>
<div class='ui container'>

<div class='git-project-content-wrapper'>
<div class='ui grid' id='project-wrapper'>
<div class='sixteen wide column'>
<div class='git-project-content' id='git-project-content'>
<div class='row'>
<div class='git-project-desc-wrapper'>
<script>
  if (false) {
    gon.project_new_blob_path = "/sentsin/layui/new/master/src/modules/dropdown.js"
    bindShowModal({
      el: $('.no-license .project-license__create'),
      complete: function(data, modal) {
        if (!data.haveNoChoice && !data.data) {
          Flash.show('请选择一项开源许可证')
        } else {
          location.href = gon.project_new_blob_path + '?license=' + data.data
        }
      },
      skip: function () {
        location.href = gon.project_new_blob_path + '?license'
      }
    });
  }
  
  $('i.help.circle.icon').popup({
    popup: '.no-license .ui.popup',
    position: 'right center'
  });
  
  $('#remove-no-license-message').on('click', function() {
    $.cookie("skip_repo_no_license_message_1672969", 'hide', { expires: 365 });
    $('#user-no-license-message').hide();
    return;
  });
</script>
</div>

</div>
<div class='git-project-bread' id='git-project-bread'>
<div class='ui horizontal list mr-1'>
<div class='item git-project-branch-item'>
<input type="hidden" name="path" id="path" value="src/modules/dropdown.js" />
<div class='ui top left pointing dropdown gradient button dropdown-has-tabs' id='git-project-branch'>
<input type="hidden" name="ref" id="ref" value="master" />
<div class='default text'>
master
</div>
<i class='dropdown icon'></i>
<div class='menu'>
<div class='ui left icon search input'>
<i class='iconfont icon-search'></i>
<input class='search-branch' placeholder='搜索分支' type='text'>
</div>
<div class='tab-menu'>
<div class='tab-menu-action' data-tab='branches'>
<a class="ui link button" href="/sentsin/layui/branches">管理</a>
</div>
<div class='tab-menu-action' data-tab='tags'>
<a class="ui link button" href="/sentsin/layui/tags">管理</a>
</div>
<div class='tab-menu-item' data-placeholder='搜索分支' data-tab='branches'>
分支 (4)
</div>
<div class='tab-menu-item' data-placeholder='搜索标签' data-tab='tags'>
标签 (51)
</div>
</div>
<div class='tab scrolling menu' data-tab='branches' id='branches_panel'>
<div data-value="master" class="item"><span>master</span></div>
<div data-value="circleci-project-setup" class="item"><span>circleci-project-setup</span></div>
<div data-value="dev" class="item"><span>dev</span></div>
<div data-value="v1" class="item"><span>v1</span></div>
</div>
<div class='tab scrolling menu' data-tab='tags'>
<div class='item' data-value='v2.6.8'>v2.6.8</div>
<div class='item' data-value='v2.6.7'>v2.6.7</div>
<div class='item' data-value='v2.6.6'>v2.6.6</div>
<div class='item' data-value='v2.6.5'>v2.6.5</div>
<div class='item' data-value='v2.6.4'>v2.6.4</div>
<div class='item' data-value='v2.6.3-2'>v2.6.3-2</div>
<div class='item' data-value='v2.6.3'>v2.6.3</div>
<div class='item' data-value='v2.6.2'>v2.6.2</div>
<div class='item' data-value='v2.6.1'>v2.6.1</div>
<div class='item' data-value='v2.6.0'>v2.6.0</div>
<div class='item' data-value='v2.5.7'>v2.5.7</div>
<div class='item' data-value='v2.5.6'>v2.5.6</div>
<div class='item' data-value='v2.5.5'>v2.5.5</div>
<div class='item' data-value='v2.5.4'>v2.5.4</div>
<div class='item' data-value='v2.5.3'>v2.5.3</div>
<div class='item' data-value='v2.5.2'>v2.5.2</div>
<div class='item' data-value='v2.5.1'>v2.5.1</div>
<div class='item' data-value='v2.5.0'>v2.5.0</div>
<div class='item' data-value='v2.4.5'>v2.4.5</div>
<div class='item' data-value='v2.4.4'>v2.4.4</div>
<div class='item' data-value='v2.4.3'>v2.4.3</div>
<div class='item' data-value='v2.4.2'>v2.4.2</div>
<div class='item' data-value='v2.4.0'>v2.4.0</div>
<div class='item' data-value='v2.3.0'>v2.3.0</div>
<div class='item' data-value='v2.2.6'>v2.2.6</div>
<div class='item' data-value='v2.2.5'>v2.2.5</div>
<div class='item' data-value='2.2.45'>2.2.45</div>
<div class='item' data-value='v2.2.4'>v2.2.4</div>
<div class='item' data-value='v2.2.3'>v2.2.3</div>
<div class='item' data-value='v2.2.2-rc1'>v2.2.2-rc1</div>
<div class='item' data-value='v2.2.2-rls'>v2.2.2-rls</div>
<div class='item' data-value='v2.2.2'>v2.2.2</div>
<div class='item' data-value='v2.2.1'>v2.2.1</div>
<div class='item' data-value='v2.2.0'>v2.2.0</div>
<div class='item' data-value='v2.1.7'>v2.1.7</div>
<div class='item' data-value='v2.1.6'>v2.1.6</div>
<div class='item' data-value='v2.1.5'>v2.1.5</div>
<div class='item' data-value='v2.1.4'>v2.1.4</div>
<div class='item' data-value='v2.1.3'>v2.1.3</div>
<div class='item' data-value='v2.1.2'>v2.1.2</div>
<div class='item' data-value='v2.1.0'>v2.1.0</div>
<div class='item' data-value='v2.1.1'>v2.1.1</div>
<div class='item' data-value='v2.0.2'>v2.0.2</div>
<div class='item' data-value='v2.0.1'>v2.0.1</div>
<div class='item' data-value='v2.0.0'>v2.0.0</div>
<div class='item' data-value='v1.0.9_rls'>v1.0.9_rls</div>
<div class='item' data-value='v1.0.9'>v1.0.9</div>
<div class='item' data-value='v1.0.8'>v1.0.8</div>
<div class='item' data-value='v1.0.7'>v1.0.7</div>
<div class='item' data-value='v1.0.6'>v1.0.6</div>
<div class='item' data-value='v1.0.4'>v1.0.4</div>
</div>
</div>
</div>
<style>
  .iconfont.icon-shieldlock {
    color: #8c92a4;
  }
</style>
<script>
  var $branchesDropdown = $('#branches_panel');
  var $searchNameInput = $('.search-branch');
  var concurrentRequestLock = false;
  var filterXSS = window.filterXSS;
  $branchesDropdown.scroll(function() {
    var branchesPanel = document.getElementById('branches_panel');
    var numOfBranches = $branchesDropdown.children().length;
    var pageToken = $branchesDropdown.children().last().text().trim();
    if (branchesPanel.clientHeight + branchesPanel.scrollTop + 37 > branchesPanel.scrollHeight && numOfBranches < 4) {
      loadData({ page_token: pageToken });
    }
  });
  
  $searchNameInput.on('input', window.globalUtils.debouce(function (e) {
    var $currentTab = $('.tab-menu-action.active');
    var numOfBranches = $branchesDropdown.children().length;
    if($currentTab.data('tab') === 'branches' && numOfBranches < 4) {
    var searchWord = $searchNameInput.val().trim();
      if (searchWord !== "") {
        loadData({ search: searchWord });
      } else {
        loadData({});
      }
    }
  }, 500));
  
  function loadData(data) {
    if (concurrentRequestLock) { return; }
      concurrentRequestLock = true;
      $.ajax({
        url: "/sentsin/layui/branches/load_more",
        type: 'GET',
        data: data,
        dataType: 'json',
        success: function (branches) {
          var html = '';
          var protectRule = '';
          if (data.search || !data.page_token) {
            $branchesDropdown.empty();
          }
          branches.forEach(function (branch) {
            var branchName = filterXSS(branch.name);
            if(branch.branch_type.value === 1) {
              var rule = filterXSS(branch.protection_rule.wildcard);
              protectRule = `<i
                 class="iconfont icon-shieldlock protected-branch-popup"
                 data-title="受保护分支"
                 data-content='保护规则： ${rule}'
                >
                </i>`
            }
            html += `<div data-value='${branchName}' class="item">
                      <span>${branchName}</span> ${protectRule}
                     </div>`
          });
          $branchesDropdown.append(html);
          $('.protected-branch-popup').popup()
        },
        complete: function () {
          concurrentRequestLock = false;
        }
    });
  }
</script>

<script>
  $(function () {
    Gitee.initTabsInDropdown($('#git-project-branch').dropdown({
      fullTextSearch: true,
      selectOnKeydown: true,
      action: function (text,value,el) {
        var oItemOrInitObject = el[0] || el
        var isNotSelect = oItemOrInitObject.dataset.tab && oItemOrInitObject.dataset.tab === 'branches'
        if(isNotSelect){
          console.warn("You didn't choose a branch")
          return
        } 
        var path = $('#path').val();
        var href = ['/sentsin/layui/tree', encodeURIComponent(value), path].join('/');
        window.location.href = href;
        return true
      },
      onNoResults: function (searchTerm) {
        //未找到结果
        return true
      },
    }));
    $('.protected-branch-popup').popup()
  })
</script>

</div>
</div>
<div class='git-project-right-actions pull-right'>
<div class='ui orange button' id='btn-dl-or-clone'>
克隆/下载
<i class='dropdown icon'></i>
</div>
<div class='git-project-download-panel for-project ui bottom right popup'>
<div class='ui small secondary pointing menu'>
<a class='item active' data-text='' data-type='http' data-url='https://gitee.com/sentsin/layui.git'>HTTPS</a>
<a class='item' data-text='' data-type='ssh' data-url='git@gitee.com:sentsin/layui.git'>SSH</a>
<a class='item' data-text="该仓库未启用SVN访问，请仓库管理员前往【&lt;a target='_blank' href=/sentsin/layui/settings&gt;仓库设置&lt;/a&gt;】开启。" data-type='svn' data-url=''>SVN</a>
<a class='item' data-text="该仓库未启用SVN访问，请仓库管理员前往【&lt;a target='_blank' href=/sentsin/layui/settings&gt;仓库设置&lt;/a&gt;】开启。" data-type='svn_ssh' data-url=''>SVN+SSH</a>
</div>
<div class='ui fluid right labeled small input download-url-panel'>
<input type="text" name="project_clone_url" id="project_clone_url" value="https://gitee.com/sentsin/layui.git" onclick="focus();select()" readonly="readonly" />
<div class='ui basic label'>
<div class='ui small basic orange button' data-clipboard-target='#project_clone_url' id='btn-copy-clone-url'>
复制
</div>
</div>
</div>
<div class='ui fluid right labeled warning-text forbid-warning-text'>

</div>
<hr>
<a class="ui fluid tiny download link button" sa_evt="repoDownload" sa_repo_id="1672969" sa_is_self="false" sa_is_member="false" href="/sentsin/layui/repository/archive/master.zip"><i class='icon download'></i>
下载ZIP
</a></div>
<script>
  (function() {
    var $btnClone, $btnCopy, $input, $panel;
  
    $btnClone = $('#btn-dl-or-clone');
  
    $panel = $('.git-project-download-panel');
  
    $input = $('#project_clone_url');
  
    $btnCopy = $('#btn-copy-clone-url');
  
    $btnClone.popup({
      on: 'click',
      hoverable: true,
      position: 'bottom center'
    });
  
    $panel.find('.menu > .item').on('click', function(e) {
      var $item, dataUrl;
      $item = $(this).addClass('active');
      $item.siblings().removeClass('active');
      dataUrl = $item.attr('data-url');
      if (dataUrl) {
        $panel.find('.download-url-panel').show();
        $input.val(dataUrl);
        $panel.find('.forbid-warning-text').html('');
      } else {
        $panel.find('.download-url-panel').hide();
        $panel.find('.forbid-warning-text').html($item.attr('data-text') || '');
      }
      return $.cookie('remote_way', $item.attr('data-type'), {
        expires: 365,
        path: '/'
      });
    }).filter('[data-type="' + ($.cookie('remote_way') || 'http') + '"]').trigger('click');
  
    new Clipboard($btnCopy[0]).on('success', function() {
      $btnCopy.popup({
        content: '已复制',
        position: 'right center',
        onHidden: function() {
          return $btnCopy.popup('destroy');
        }
      });
      return $btnCopy.popup('show');
    });
  
  }).call(this);
</script>

</div>
<div class='d-inline pull-right' id='git-project-root-actions'>
<script>
  $('.disabled-upload-readonly').popup({
    content: "只读目录不允许上传文件",
    className: {
      popup: 'ui popup',
    },
    position: 'bottom center',
  })
  $('.disabled-create-folder').popup({
    content: "只读目录不允许创建目录",
    className: {
      popup: 'ui popup',
    },
    position: 'bottom center',
  })
  $('.disabled-create-file').popup({
    content: "只读目录不允许创建文件",
    className: {
      popup: 'ui popup',
    },
    position: 'bottom center',
  })
  $('.disabled-create-submodule').popup({
    content: "只读目录不允许创建子模块",
    className: {
      popup: 'ui popup',
    },
    position: 'bottom center',
  })
  $('.disabled-upload-readonly, .disabled-create-folder, .disabled-create-file, .disabled-create-submodule').click(function() {
    return false
  })
</script>
<style>
  .disabled-upload-readonly, .disabled-create-file, .disabled-create-folder, .disabled-create-submodule {
    background-color: #dcddde !important;
    color: rgba(0, 0, 0, 0.4) !important;
    opacity: 0.3 !important;
    background-image: none !important;
    -webkit-box-shadow: none !important;
            box-shadow: none !important; }
</style>


</div>
<div class='breadcrumb_path path-breadcrumb-contrainer' id='git-project-breadcrumb'>
<div class='ui breadcrumb path project-path-breadcrumb' id='path-breadcrumb'>
<a data-direction="back" class="section repo-name" style="font-weight: bold" href="/sentsin/layui/tree/master">layui
</a><div class='divider'>
/
</div>
<strong>
<a data-direction="back" class="section" href="/sentsin/layui/tree/master/src"><span class='cblue'>
src
</span>
</a></strong>
<div class='divider'>
/
</div>
<strong>
<a data-direction="back" class="section" href="/sentsin/layui/tree/master/src/modules"><span class='cblue'>
modules
</span>
</a></strong>
<div class='divider'>
/
</div>
<strong>
dropdown.js
</strong>
<i class='iconfont icon-clone' data-clipboard-text='src/modules/dropdown.js' id='btn-copy-file-path'></i>
</div>
<style>
  #btn-copy-file-path {
    vertical-align: middle;
    cursor: pointer;
  }
</style>
<script>
  $btnCopy = $('#btn-copy-file-path')
  $btnCopy.popup({
    content: '复制路径'
  })
  
  if ($btnCopy[0]) {
    new Clipboard($btnCopy[0]).on('success', function() {
      $btnCopy.popup('destroy').popup({
        content: '已复制',
        on: 'manual'
      }).popup('show');
      setTimeout(function () {
        $btnCopy.popup('destroy').popup({
          content: '复制路径'
        });
      }, 2000)
    });
  }
</script>


</div>
<div class='ui horizontal list repo-action-list branches-tags' style='display: none;'>
<div class='item'>
<a class="ui blank button" href="/sentsin/layui/branches"><i class='iconfont icon-branches'></i>
分支 4
</a></div>
<div class='item mr-3'>
<a class="ui blank button" href="/sentsin/layui/tags"><i class='iconfont icon-tag'></i>
标签 51
</a></div>
</div>
</div>
<script>
  if(window.gon.locale == 'en')
    $('.branches-tags').css('margin-top', '12px')
</script>

<style>
  .ui.dropdown .menu > .header {
    text-transform: none; }
</style>
<script>
  $(function () {
    var $tip = $('#apk-download-tip');
    if (!$tip.length) {
      return;
    }
    $tip.find('.btn-close').on('click', function () {
      $tip.hide();
    });
  });
  (function(){
    function pathAutoRender() {
      var $parent = $('#git-project-bread'),
          $child = $('#git-project-bread').children('.ui.horizontal.list'),
          mainWidth = 0;
      $child.each(function (i,item) {
        mainWidth += $(item).width()
      });
      $('.breadcrumb.path.fork-path').remove();
      if (mainWidth > 995) {
        $('#path-breadcrumb').hide();
        $parent.append('<div class="ui breadcrumb path fork-path">' + $('#path-breadcrumb').html() + '<div/>')
      } else {
        $('#path-breadcrumb').show();
      }
    }
    window.pathAutoRender = pathAutoRender;
    pathAutoRender();
  })();
</script>

<div class='row column tree-holder' id='tree-holder'>
<div class='tree-content-holder' id='tree-content-holder'>
<div class='file_holder'>
<div class='file_title'>
<div class='blob-header-title'>
<div class='blob-description'>
<i class="iconfont icon-file"></i>
<span class='file_name' title='dropdown.js'>
dropdown.js
</span>
<small>15.74 KB</small>
</div>
<div class='options'><div class='ui mini buttons basic'>

<textarea name="blob_raw" id="blob_raw" style="display:none;">
/**&#x000A; &#x000A; @Name：dropdown 下拉菜单组件&#x000A; @License：MIT&#x000A;&#x000A; */&#x000A;&#x000A;layui.define([&#39;jquery&#39;, &#39;laytpl&#39;, &#39;lay&#39;], function(exports){&#x000A;  &quot;use strict&quot;;&#x000A;  &#x000A;  var $ = layui.$&#x000A;  ,laytpl = layui.laytpl&#x000A;  ,hint = layui.hint()&#x000A;  ,device = layui.device()&#x000A;  ,clickOrMousedown = (device.mobile ? &#39;click&#39; : &#39;mousedown&#39;)&#x000A;  &#x000A;  //模块名&#x000A;  ,MOD_NAME = &#39;dropdown&#39;&#x000A;  ,MOD_INDEX = &#39;layui_&#39;+ MOD_NAME +&#39;_index&#39; //模块索引名&#x000A;&#x000A;  //外部接口&#x000A;  ,dropdown = {&#x000A;    config: {}&#x000A;    ,index: layui[MOD_NAME] ? (layui[MOD_NAME].index + 10000) : 0&#x000A;&#x000A;    //设置全局项&#x000A;    ,set: function(options){&#x000A;      var that = this;&#x000A;      that.config = $.extend({}, that.config, options);&#x000A;      return that;&#x000A;    }&#x000A;    &#x000A;    //事件&#x000A;    ,on: function(events, callback){&#x000A;      return layui.onevent.call(this, MOD_NAME, events, callback);&#x000A;    }&#x000A;  }&#x000A;&#x000A;  //操作当前实例&#x000A;  ,thisModule = function(){&#x000A;    var that = this&#x000A;    ,options = that.config&#x000A;    ,id = options.id;&#x000A;&#x000A;    thisModule.that[id] = that; //记录当前实例对象&#x000A;&#x000A;    return {&#x000A;      config: options&#x000A;      //重置实例&#x000A;      ,reload: function(options){&#x000A;        that.reload.call(that, options);&#x000A;      }&#x000A;    }&#x000A;  }&#x000A;&#x000A;  //字符常量&#x000A;  ,STR_ELEM = &#39;layui-dropdown&#39;, STR_HIDE = &#39;layui-hide&#39;, STR_DISABLED = &#39;layui-disabled&#39;, STR_NONE = &#39;layui-none&#39;&#x000A;  ,STR_ITEM_UP = &#39;layui-menu-item-up&#39;, STR_ITEM_DOWN = &#39;layui-menu-item-down&#39;, STR_MENU_TITLE = &#39;layui-menu-body-title&#39;, STR_ITEM_GROUP = &#39;layui-menu-item-group&#39;, STR_ITEM_PARENT = &#39;layui-menu-item-parent&#39;, STR_ITEM_DIV = &#39;layui-menu-item-divider&#39;, STR_ITEM_CHECKED = &#39;layui-menu-item-checked&#39;, STR_ITEM_CHECKED2 = &#39;layui-menu-item-checked2&#39;, STR_MENU_PANEL = &#39;layui-menu-body-panel&#39;, STR_MENU_PANEL_L = &#39;layui-menu-body-panel-left&#39;&#x000A;  &#x000A;  ,STR_GROUP_TITLE = &#39;.&#39;+ STR_ITEM_GROUP + &#39;&gt;.&#39;+ STR_MENU_TITLE&#x000A;&#x000A;  //构造器&#x000A;  ,Class = function(options){&#x000A;    var that = this;&#x000A;    that.index = ++dropdown.index;&#x000A;    that.config = $.extend({}, that.config, dropdown.config, options);&#x000A;    that.init();&#x000A;  };&#x000A;&#x000A;  //默认配置&#x000A;  Class.prototype.config = {&#x000A;    trigger: &#39;click&#39; //事件类型&#x000A;    ,content: &#39;&#39; //自定义菜单内容&#x000A;    ,className: &#39;&#39; //自定义样式类名&#x000A;    ,style: &#39;&#39; //设置面板 style 属性&#x000A;    ,show: false //是否初始即显示菜单面板&#x000A;    ,isAllowSpread: true //是否允许菜单组展开收缩&#x000A;    ,isSpreadItem: true //是否初始展开子菜单&#x000A;    ,data: [] //菜单数据结构&#x000A;    ,delay: 300 //延迟关闭的毫秒数，若 trigger 为 hover 时才生效&#x000A;  };&#x000A;  &#x000A;  //重载实例&#x000A;  Class.prototype.reload = function(options){&#x000A;    var that = this;&#x000A;    that.config = $.extend({}, that.config, options);&#x000A;    that.init(true);&#x000A;  };&#x000A;&#x000A;  //初始化准备&#x000A;  Class.prototype.init = function(rerender){&#x000A;    var that = this&#x000A;    ,options = that.config&#x000A;    ,elem = options.elem = $(options.elem);&#x000A;    &#x000A;    //若 elem 非唯一&#x000A;    if(elem.length &gt; 1){&#x000A;      layui.each(elem, function(){&#x000A;        dropdown.render($.extend({}, options, {&#x000A;          elem: this&#x000A;        }));&#x000A;      });&#x000A;      return that;&#x000A;    }&#x000A;&#x000A;    //若重复执行 render，则视为 reload 处理&#x000A;    if(!rerender &amp;&amp; elem[0] &amp;&amp; elem.data(MOD_INDEX)){;&#x000A;      var newThat = thisModule.getThis(elem.data(MOD_INDEX));&#x000A;      if(!newThat) return;&#x000A;&#x000A;      return newThat.reload(options);&#x000A;    };&#x000A;    &#x000A;    //初始化 id 参数&#x000A;    options.id = (&#39;id&#39; in options) ? options.id : that.index;&#x000A;    &#x000A;    if(options.show) that.render(rerender); //初始即显示&#x000A;    that.events(); //事件&#x000A;  };&#x000A;  &#x000A;  //渲染&#x000A;  Class.prototype.render = function(rerender){&#x000A;    var that = this&#x000A;    ,options = that.config&#x000A;    ,elemBody = $(&#39;body&#39;)&#x000A;    &#x000A;    //默认菜单内容&#x000A;    ,getDefaultView = function(){&#x000A;      var elemUl = $(&#39;&lt;ul class=&quot;layui-menu layui-dropdown-menu&quot;&gt;&lt;/ul&gt;&#39;);&#x000A;      if(options.data.length &gt; 0 ){&#x000A;        eachItemView(elemUl, options.data)&#x000A;      } else {&#x000A;        elemUl.html(&#39;&lt;li class=&quot;layui-menu-item-none&quot;&gt;no menu&lt;/li&gt;&#39;);&#x000A;      }&#x000A;      return elemUl;&#x000A;    }&#x000A;    &#x000A;    //遍历菜单项&#x000A;    ,eachItemView = function(views, data){&#x000A;      //var views = [];&#x000A;      layui.each(data, function(index, item){&#x000A;        //是否存在子级&#x000A;        var isChild = item.child &amp;&amp; item.child.length &gt; 0&#x000A;        ,isSpreadItem = (&#39;isSpreadItem&#39; in item) ? item.isSpreadItem : options.isSpreadItem&#x000A;        ,title = item.templet &#x000A;          ? laytpl(item.templet).render(item) &#x000A;        : (options.templet ? laytpl(options.templet).render(item) : item.title)&#x000A;        &#x000A;        //初始类型&#x000A;        ,type = function(){&#x000A;          if(isChild){&#x000A;            item.type = item.type || &#39;parent&#39;;&#x000A;          }&#x000A;          if(item.type){&#x000A;            return ({&#x000A;              group: &#39;group&#39;&#x000A;              ,parent: &#39;parent&#39;&#x000A;              ,&#39;-&#39;: &#39;-&#39;&#x000A;            })[item.type] || &#39;parent&#39;;&#x000A;          }&#x000A;          return &#39;&#39;;&#x000A;        }();&#x000A;&#x000A;        if(type !== &#39;-&#39; &amp;&amp; (!item.title &amp;&amp; !item.id &amp;&amp; !isChild)) return;&#x000A;        &#x000A;        //列表元素&#x000A;        var viewLi = $([&#39;&lt;li&#39;+ function(){&#x000A;          var className = {&#x000A;            group: &#39;layui-menu-item-group&#39;+ (&#x000A;              options.isAllowSpread ? (&#x000A;                isSpreadItem ? &#39; layui-menu-item-down&#39; : &#39; layui-menu-item-up&#39;&#x000A;              ) : &#39;&#39;&#x000A;            )&#x000A;            ,parent: STR_ITEM_PARENT&#x000A;            ,&#39;-&#39;: &#39;layui-menu-item-divider&#39;&#x000A;          };&#x000A;          if(isChild || type){&#x000A;            return &#39; class=&quot;&#39;+ className[type] +&#39;&quot;&#39;;&#x000A;          }&#x000A;          return &#39;&#39;;&#x000A;        }() +&#39;&gt;&#39;&#x000A;        &#x000A;          //标题区&#x000A;          ,function(){&#x000A;            //是否超文本&#x000A;            var viewText = (&#39;href&#39; in item) ? (&#x000A;              &#39;&lt;a href=&quot;&#39;+ item.href +&#39;&quot; target=&quot;&#39;+ (item.target || &#39;_self&#39;) +&#39;&quot;&gt;&#39;+ title +&#39;&lt;/a&gt;&#39;&#x000A;            ) : title;&#x000A;            &#x000A;            //是否存在子级&#x000A;            if(isChild){&#x000A;              return &#39;&lt;div class=&quot;&#39;+ STR_MENU_TITLE +&#39;&quot;&gt;&#39;+ viewText + function(){&#x000A;                if(type === &#39;parent&#39;){&#x000A;                  return &#39;&lt;i class=&quot;layui-icon layui-icon-right&quot;&gt;&lt;/i&gt;&#39;;&#x000A;                } else if(type === &#39;group&#39; &amp;&amp; options.isAllowSpread){&#x000A;                  return &#39;&lt;i class=&quot;layui-icon layui-icon-&#39;+ (isSpreadItem ? &#39;up&#39; : &#39;down&#39;) +&#39;&quot;&gt;&lt;/i&gt;&#39;;&#x000A;                } else {&#x000A;                  return &#39;&#39;;&#x000A;                }&#x000A;              }() +&#39;&lt;/div&gt;&#39;&#x000A;              &#x000A;            }&#x000A;            return &#39;&lt;div class=&quot;&#39;+ STR_MENU_TITLE +&#39;&quot;&gt;&#39;+ viewText +&#39;&lt;/div&gt;&#39;;&#x000A;          }()&#x000A;        ,&#39;&lt;/li&gt;&#39;].join(&#39;&#39;));&#x000A;        &#x000A;        viewLi.data(&#39;item&#39;, item);&#x000A;        &#x000A;        //子级区&#x000A;        if(isChild){&#x000A;          var elemPanel = $(&#39;&lt;div class=&quot;layui-panel layui-menu-body-panel&quot;&gt;&lt;/div&gt;&#39;)&#x000A;          ,elemUl = $(&#39;&lt;ul&gt;&lt;/ul&gt;&#39;);&#x000A;&#x000A;          if(type === &#39;parent&#39;){&#x000A;            elemPanel.append(eachItemView(elemUl, item.child));&#x000A;            viewLi.append(elemPanel);&#x000A;          } else {&#x000A;            viewLi.append(eachItemView(elemUl, item.child));&#x000A;          }&#x000A;        }&#x000A;&#x000A;        views.append(viewLi);&#x000A;      });&#x000A;      return views;&#x000A;    }&#x000A;    &#x000A;    //主模板&#x000A;    ,TPL_MAIN = [&#39;&lt;div class=&quot;layui-dropdown layui-border-box layui-panel layui-anim layui-anim-downbit&quot;&gt;&#39;&#x000A;    ,&#39;&lt;/div&gt;&#39;].join(&#39;&#39;);&#x000A;    &#x000A;    //如果是右键事件，则每次触发事件时，将允许重新渲染&#x000A;    if(options.trigger === &#39;contextmenu&#39; || lay.isTopElem(options.elem[0])) rerender = true;&#x000A;    &#x000A;    //判断是否已经打开了下拉菜单面板&#x000A;    if(!rerender &amp;&amp; options.elem.data(MOD_INDEX +&#39;_opened&#39;)) return;&#x000A;&#x000A;    //记录模板对象&#x000A;    that.elemView = $(TPL_MAIN);&#x000A;    that.elemView.append(options.content || getDefaultView());&#x000A;    &#x000A;    //初始化某些属性&#x000A;    if(options.className) that.elemView.addClass(options.className);&#x000A;    if(options.style) that.elemView.attr(&#39;style&#39;, options.style);&#x000A;    &#x000A;    &#x000A;    //记录当前执行的实例索引&#x000A;    dropdown.thisId = options.id;&#x000A;    &#x000A;    //插入视图&#x000A;    that.remove(); //移除非当前绑定元素的面板&#x000A;    elemBody.append(that.elemView);&#x000A;    options.elem.data(MOD_INDEX +&#39;_opened&#39;, true);&#x000A;    &#x000A;    //坐标定位&#x000A;    that.position();&#x000A;    thisModule.prevElem = that.elemView; //记录当前打开的元素，以便在下次关闭&#x000A;    thisModule.prevElem.data(&#39;prevElem&#39;, options.elem); //将当前绑定的元素，记录在打开元素的 data 对象中&#x000A;    &#x000A;    //阻止全局事件&#x000A;    that.elemView.find(&#39;.layui-menu&#39;).on(clickOrMousedown, function(e){&#x000A;      layui.stope(e);&#x000A;    });&#x000A;&#x000A;    //触发菜单列表事件&#x000A;    that.elemView.find(&#39;.layui-menu li&#39;).on(&#39;click&#39;, function(e){&#x000A;      var othis = $(this)&#x000A;      ,data = othis.data(&#39;item&#39;) || {}&#x000A;      ,isChild = data.child &amp;&amp; data.child.length &gt; 0;&#x000A;      &#x000A;      if(!isChild &amp;&amp; data.type !== &#39;-&#39;){&#x000A;        that.remove();&#x000A;        typeof options.click === &#39;function&#39; &amp;&amp; options.click(data, othis);&#x000A;      }&#x000A;    });&#x000A;    &#x000A;    //触发菜单组展开收缩&#x000A;    that.elemView.find(STR_GROUP_TITLE).on(&#39;click&#39;, function(e){&#x000A;      var othis = $(this)&#x000A;      ,elemGroup = othis.parent()&#x000A;      ,data = elemGroup.data(&#39;item&#39;) || {}&#x000A;      &#x000A;      if(data.type === &#39;group&#39; &amp;&amp; options.isAllowSpread){&#x000A;        thisModule.spread(elemGroup);&#x000A;      }&#x000A;    });&#x000A;    &#x000A;    //如果是鼠标移入事件，则鼠标移出时自动关闭&#x000A;    if(options.trigger === &#39;mouseenter&#39;){&#x000A;      that.elemView.on(&#39;mouseenter&#39;, function(){&#x000A;        clearTimeout(thisModule.timer);&#x000A;      }).on(&#39;mouseleave&#39;, function(){&#x000A;        that.delayRemove();&#x000A;      });&#x000A;    }&#x000A;&#x000A;  };&#x000A;  &#x000A;  //位置定位&#x000A;  Class.prototype.position = function(obj){&#x000A;    var that = this&#x000A;    ,options = that.config;&#x000A;    &#x000A;    lay.position(options.elem[0], that.elemView[0], {&#x000A;      position: options.position&#x000A;      ,e: that.e&#x000A;      ,clickType: options.trigger === &#39;contextmenu&#39; ? &#39;right&#39; : null&#x000A;      ,align: options.align || null&#x000A;    });&#x000A;  };&#x000A;  &#x000A;  //删除视图&#x000A;  Class.prototype.remove = function(){&#x000A;    var that = this&#x000A;    ,options = that.config&#x000A;    ,elemPrev = thisModule.prevElem;&#x000A;    &#x000A;    //若存在已打开的面板元素，则移除&#x000A;    if(elemPrev){&#x000A;      elemPrev.data(&#39;prevElem&#39;) &amp;&amp; (&#x000A;        elemPrev.data(&#39;prevElem&#39;).data(MOD_INDEX +&#39;_opened&#39;, false)&#x000A;      );&#x000A;      elemPrev.remove();&#x000A;    }&#x000A;  };&#x000A;  &#x000A;  //延迟删除视图&#x000A;  Class.prototype.delayRemove = function(){&#x000A;    var that = this&#x000A;    ,options = that.config;&#x000A;    clearTimeout(thisModule.timer);&#x000A;&#x000A;    thisModule.timer = setTimeout(function(){&#x000A;      that.remove();&#x000A;    }, options.delay);&#x000A;  };&#x000A;  &#x000A;  //事件&#x000A;  Class.prototype.events = function(){&#x000A;    var that = this&#x000A;    ,options = that.config;&#x000A;    &#x000A;    //如果传入 hover，则解析为 mouseenter&#x000A;    if(options.trigger === &#39;hover&#39;) options.trigger = &#39;mouseenter&#39;;&#x000A;&#x000A;    //解除上一个事件&#x000A;    if(that.prevElem) that.prevElem.off(options.trigger, that.prevElemCallback);&#x000A;    &#x000A;    //记录被绑定的元素及回调&#x000A;    that.prevElem = options.elem;&#x000A;    that.prevElemCallback = function(e){&#x000A;      clearTimeout(thisModule.timer);&#x000A;      that.e = e;&#x000A;      that.render();&#x000A;      e.preventDefault();&#x000A;      &#x000A;      //组件打开完毕的时间&#x000A;      typeof options.ready === &#39;function&#39; &amp;&amp; options.ready(that.elemView, options.elem, that.e.target);&#x000A;    };&#x000A;&#x000A;    //触发元素事件&#x000A;    options.elem.on(options.trigger, that.prevElemCallback);&#x000A;    &#x000A;    //如果是鼠标移入事件&#x000A;    if(options.trigger === &#39;mouseenter&#39;){&#x000A;      //直行鼠标移出事件&#x000A;      options.elem.on(&#39;mouseleave&#39;, function(){&#x000A;        that.delayRemove();&#x000A;      });&#x000A;    }&#x000A;  };&#x000A;  &#x000A;  //记录所有实例&#x000A;  thisModule.that = {}; //记录所有实例对象&#x000A;  &#x000A;  //获取当前实例对象&#x000A;  thisModule.getThis = function(id){&#x000A;    var that = thisModule.that[id];&#x000A;    if(!that) hint.error(id ? (MOD_NAME +&#39; instance with ID \&#39;&#39;+ id +&#39;\&#39; not found&#39;) : &#39;ID argument required&#39;);&#x000A;    return that;&#x000A;  };&#x000A;  &#x000A;  //设置菜单组展开和收缩状态&#x000A;  thisModule.spread = function(othis){&#x000A;    //菜单组展开和收缩&#x000A;    var elemIcon = othis.children(&#39;.&#39;+ STR_MENU_TITLE).find(&#39;.layui-icon&#39;);&#x000A;    if(othis.hasClass(STR_ITEM_UP)){&#x000A;      othis.removeClass(STR_ITEM_UP).addClass(STR_ITEM_DOWN);&#x000A;      elemIcon.removeClass(&#39;layui-icon-down&#39;).addClass(&#39;layui-icon-up&#39;);&#x000A;    } else {&#x000A;      othis.removeClass(STR_ITEM_DOWN).addClass(STR_ITEM_UP);&#x000A;      elemIcon.removeClass(&#39;layui-icon-up&#39;).addClass(&#39;layui-icon-down&#39;)&#x000A;    }&#x000A;  };&#x000A;  &#x000A;  //全局事件&#x000A;  ;!function(){&#x000A;    var _WIN = $(window)&#x000A;    ,_DOC = $(document);&#x000A;    &#x000A;    //自适应定位&#x000A;    _WIN.on(&#39;resize&#39;, function(){&#x000A;      if(!dropdown.thisId) return;&#x000A;      var that = thisModule.getThis(dropdown.thisId);&#x000A;      if(!that) return;&#x000A;      &#x000A;      if(!that.elemView[0] || !$(&#39;.&#39;+ STR_ELEM)[0]){&#x000A;        return false;&#x000A;      }&#x000A;      &#x000A;      var options = that.config;&#x000A;      &#x000A;      if(options.trigger === &#39;contextmenu&#39;){&#x000A;        that.remove();&#x000A;      } else {&#x000A;        that.position();&#x000A;      }&#x000A;    });&#x000A;    &#x000A;    &#x000A;      &#x000A;    //点击任意处关闭&#x000A;    _DOC.on(clickOrMousedown, function(e){&#x000A;      if(!dropdown.thisId) return;&#x000A;      var that = thisModule.getThis(dropdown.thisId)&#x000A;      if(!that) return;&#x000A;      &#x000A;      var options = that.config;&#x000A;      &#x000A;      //如果触发的是绑定的元素，或者属于绑定元素的子元素，则不关闭&#x000A;      //满足条件：当前绑定的元素不是 body document，或者不是鼠标右键事件&#x000A;      if(!(lay.isTopElem(options.elem[0]) || options.trigger === &#39;contextmenu&#39;)){&#x000A;        if(&#x000A;          e.target === options.elem[0] || &#x000A;          options.elem.find(e.target)[0] ||&#x000A;          e.target === that.elemView[0] ||&#x000A;          (that.elemView &amp;&amp; that.elemView.find(e.target)[0])&#x000A;        ) return;&#x000A;      }&#x000A;      &#x000A;      that.remove();&#x000A;    });&#x000A;    &#x000A;    //基础菜单的静态元素事件&#x000A;    var ELEM_LI = &#39;.layui-menu:not(.layui-dropdown-menu) li&#39;;&#x000A;    _DOC.on(&#39;click&#39;, ELEM_LI, function(e){&#x000A;      var othis = $(this)&#x000A;      ,parent = othis.parents(&#39;.layui-menu&#39;).eq(0)&#x000A;      ,isChild = othis.hasClass(STR_ITEM_GROUP) || othis.hasClass(STR_ITEM_PARENT)&#x000A;      ,filter = parent.attr(&#39;lay-filter&#39;) || parent.attr(&#39;id&#39;)&#x000A;      ,options = lay.options(this);&#x000A;      &#x000A;      //非触发元素&#x000A;      if(othis.hasClass(STR_ITEM_DIV)) return;&#x000A;&#x000A;      //非菜单组&#x000A;      if(!isChild){&#x000A;        //选中&#x000A;        parent.find(&#39;.&#39;+ STR_ITEM_CHECKED).removeClass(STR_ITEM_CHECKED); //清除选中样式&#x000A;        parent.find(&#39;.&#39;+ STR_ITEM_CHECKED2).removeClass(STR_ITEM_CHECKED2); //清除父级菜单选中样式&#x000A;        othis.addClass(STR_ITEM_CHECKED); //添加选中样式&#x000A;        othis.parents(&#39;.&#39;+ STR_ITEM_PARENT).addClass(STR_ITEM_CHECKED2); //添加父级菜单选中样式&#x000A;        &#x000A;        //触发事件&#x000A;        layui.event.call(this, MOD_NAME, &#39;click(&#39;+ filter +&#39;)&#39;, options);&#x000A;      }&#x000A;    });&#x000A;    &#x000A;    //基础菜单的展开收缩事件&#x000A;    _DOC.on(&#39;click&#39;, (ELEM_LI + STR_GROUP_TITLE), function(e){&#x000A;      var othis = $(this)&#x000A;      ,elemGroup = othis.parents(&#39;.&#39;+ STR_ITEM_GROUP +&#39;:eq(0)&#39;)&#x000A;      ,options = lay.options(elemGroup[0]);&#x000A;&#x000A;      if((&#39;isAllowSpread&#39; in options) ? options.isAllowSpread : true){&#x000A;        thisModule.spread(elemGroup);&#x000A;      };&#x000A;    });&#x000A;    &#x000A;    //判断子级菜单是否超出屏幕&#x000A;    var ELEM_LI_PAR = &#39;.layui-menu .&#39;+ STR_ITEM_PARENT&#x000A;    _DOC.on(&#39;mouseenter&#39;, ELEM_LI_PAR, function(e){&#x000A;      var othis = $(this)&#x000A;      ,elemPanel = othis.find(&#39;.&#39;+ STR_MENU_PANEL);&#x000A;&#x000A;      if(!elemPanel[0]) return;&#x000A;      var rect = elemPanel[0].getBoundingClientRect();&#x000A;      &#x000A;      //是否超出右侧屏幕&#x000A;      if(rect.right &gt; _WIN.width()){&#x000A;        elemPanel.addClass(STR_MENU_PANEL_L);&#x000A;        //不允许超出左侧屏幕&#x000A;        rect = elemPanel[0].getBoundingClientRect();&#x000A;        if(rect.left &lt; 0){&#x000A;          elemPanel.removeClass(STR_MENU_PANEL_L);&#x000A;        }&#x000A;      }&#x000A;      &#x000A;      //是否超出底部屏幕&#x000A;      if(rect.bottom &gt; _WIN.height()){&#x000A;        elemPanel.eq(0).css(&#39;margin-top&#39;, -(rect.bottom - _WIN.height()));&#x000A;      };&#x000A;    }).on(&#39;mouseleave&#39;, ELEM_LI_PAR, function(e){&#x000A;      var othis = $(this)&#x000A;      ,elemPanel = othis.children(&#39;.&#39;+ STR_MENU_PANEL);&#x000A;      &#x000A;      elemPanel.removeClass(STR_MENU_PANEL_L);&#x000A;      elemPanel.css(&#39;margin-top&#39;, 0);&#x000A;    });&#x000A;    &#x000A;  }();&#x000A;  &#x000A;  //重载实例&#x000A;  dropdown.reload = function(id, options){&#x000A;    var that = thisModule.getThis(id);&#x000A;    if(!that) return this;&#x000A;&#x000A;    that.reload(options);&#x000A;    return thisModule.call(that);&#x000A;  };&#x000A;&#x000A;  //核心入口&#x000A;  dropdown.render = function(options){&#x000A;    var inst = new Class(options);&#x000A;    return thisModule.call(inst);&#x000A;  };&#x000A;&#x000A;  exports(MOD_NAME, dropdown);&#x000A;});&#x000A;</textarea>
<a class="ui button" id="copy-text" href="#">一键复制</a>
<a class="ui button edit-blob" title="" href="/sentsin/layui/edit/master/src/modules/dropdown.js">编辑</a>
<a class="ui button web-ide" target="_blank" href="/-/ide/project/sentsin/layui/edit/master/-/src/modules/dropdown.js">Web IDE</a>
<a class="ui button edit-raw" target="_blank" href="/sentsin/layui/raw/master/src/modules/dropdown.js">原始数据</a>
<a class="ui button edit-blame" href="/sentsin/layui/blame/master/src/modules/dropdown.js">按行查看</a>
<a class="ui button edit-history" href="/sentsin/layui/commits/master/src/modules/dropdown.js">历史</a>
</div>
<script>
  "use strict";
  try {
    if((gon.wait_fork!=undefined && gon.wait_fork==true) || (gon.wait_fetch!=undefined && gon.wait_fetch==true)){
      $('.edit-blob').popup({content:"当前仓库正在后台处理中,暂时无法编辑", on: 'hover', delay: { show: 200, hide: 200 }});
      $('.edit-blob').click(function(e){
        e.preventDefault();
      })
    }
  
    var setUrl = function() {
      var params = window.location.search
      if (params==undefined || $.trim(params).length==0) return;
      $('span.options').children('.basic').find('a').each(function(index,ele){
        var origin_href = $(ele).attr('href');
        if (origin_href!="#" && origin_href.indexOf('?') == -1){
          $(ele).attr('href',origin_href+params);
        }
      });
    }
  
    setUrl();
  
    var clipboard = null,
        $btncopy  = $("#copy-text");
  
    clipboard = new Clipboard("#copy-text", {
      text: function(trigger) {
        return $("#blob_raw").val();
      }
    })
  
    clipboard.on('success', function(e) {
      $btncopy.popup('hide');
      $btncopy.popup('destroy');
      $btncopy.popup({content: '已复制', position: 'bottom center'});
      $btncopy.popup('show');
    })
  
    clipboard.on('error', function(e) {
      var giteeModal = new GiteeModalHelper({okText: '确定'});
      giteeModal.alert("一键复制", '复制失败，请手动复制');
    })
  
    $(function() {
      $btncopy.popup({
        content: '点击复制',
        position: 'bottom center'
      })
    })
  
  } catch (error) {
    console.log('blob/action error:' + error);
  }
  
  $('.disabled-edit-readonly').popup({
    content: "只读文件不可编辑",
    className: {
      popup: 'ui popup',
    },
    position: 'bottom center',
  })
  $('.disabled-edit-readonly, .disabled-edit-status').click(function() {
    return false
  })
  $('.has_tooltip').popup({
    position: 'top center'
  });
</script>
<style>
  .disabled-edit-readonly, .disabled-edit-status {
    background-color: #dcddde !important;
    color: rgba(0, 0, 0, 0.4) !important;
    opacity: 0.3 !important;
    background-image: none !important;
    -webkit-box-shadow: none !important;
            box-shadow: none !important;
    cursor: default !important; }
</style>
</div>
</div>
<div class='contributor-description'><span class='recent-commit' style='margin-top: 0.7rem'>
<a class="commit-author-link  js-popover-card" data-username="null" href="mailto:3277200%2Bsentsin@users.noreply.github.com">贤心</a>
<span>提交于</span>
<span class='timeago commit-date' title='2021-05-31 08:57:00 +0800'>
2021-05-31 08:57
</span>
.
<a href="/sentsin/layui/commit/7376bbe00df6323588b408d5bf38b151aab4c449">update</a>
</span>
</div>
</div>
<div class='clearfix'></div>
<div class='file_content code'>
<div class='lines white'>
<div class='line-numbers'><a href='#L1' id='L1'>1</a><a href='#L2' id='L2'>2</a><a href='#L3' id='L3'>3</a><a href='#L4' id='L4'>4</a><a href='#L5' id='L5'>5</a><a href='#L6' id='L6'>6</a><a href='#L7' id='L7'>7</a><a href='#L8' id='L8'>8</a><a href='#L9' id='L9'>9</a><a href='#L10' id='L10'>10</a><a href='#L11' id='L11'>11</a><a href='#L12' id='L12'>12</a><a href='#L13' id='L13'>13</a><a href='#L14' id='L14'>14</a><a href='#L15' id='L15'>15</a><a href='#L16' id='L16'>16</a><a href='#L17' id='L17'>17</a><a href='#L18' id='L18'>18</a><a href='#L19' id='L19'>19</a><a href='#L20' id='L20'>20</a><a href='#L21' id='L21'>21</a><a href='#L22' id='L22'>22</a><a href='#L23' id='L23'>23</a><a href='#L24' id='L24'>24</a><a href='#L25' id='L25'>25</a><a href='#L26' id='L26'>26</a><a href='#L27' id='L27'>27</a><a href='#L28' id='L28'>28</a><a href='#L29' id='L29'>29</a><a href='#L30' id='L30'>30</a><a href='#L31' id='L31'>31</a><a href='#L32' id='L32'>32</a><a href='#L33' id='L33'>33</a><a href='#L34' id='L34'>34</a><a href='#L35' id='L35'>35</a><a href='#L36' id='L36'>36</a><a href='#L37' id='L37'>37</a><a href='#L38' id='L38'>38</a><a href='#L39' id='L39'>39</a><a href='#L40' id='L40'>40</a><a href='#L41' id='L41'>41</a><a href='#L42' id='L42'>42</a><a href='#L43' id='L43'>43</a><a href='#L44' id='L44'>44</a><a href='#L45' id='L45'>45</a><a href='#L46' id='L46'>46</a><a href='#L47' id='L47'>47</a><a href='#L48' id='L48'>48</a><a href='#L49' id='L49'>49</a><a href='#L50' id='L50'>50</a><a href='#L51' id='L51'>51</a><a href='#L52' id='L52'>52</a><a href='#L53' id='L53'>53</a><a href='#L54' id='L54'>54</a><a href='#L55' id='L55'>55</a><a href='#L56' id='L56'>56</a><a href='#L57' id='L57'>57</a><a href='#L58' id='L58'>58</a><a href='#L59' id='L59'>59</a><a href='#L60' id='L60'>60</a><a href='#L61' id='L61'>61</a><a href='#L62' id='L62'>62</a><a href='#L63' id='L63'>63</a><a href='#L64' id='L64'>64</a><a href='#L65' id='L65'>65</a><a href='#L66' id='L66'>66</a><a href='#L67' id='L67'>67</a><a href='#L68' id='L68'>68</a><a href='#L69' id='L69'>69</a><a href='#L70' id='L70'>70</a><a href='#L71' id='L71'>71</a><a href='#L72' id='L72'>72</a><a href='#L73' id='L73'>73</a><a href='#L74' id='L74'>74</a><a href='#L75' id='L75'>75</a><a href='#L76' id='L76'>76</a><a href='#L77' id='L77'>77</a><a href='#L78' id='L78'>78</a><a href='#L79' id='L79'>79</a><a href='#L80' id='L80'>80</a><a href='#L81' id='L81'>81</a><a href='#L82' id='L82'>82</a><a href='#L83' id='L83'>83</a><a href='#L84' id='L84'>84</a><a href='#L85' id='L85'>85</a><a href='#L86' id='L86'>86</a><a href='#L87' id='L87'>87</a><a href='#L88' id='L88'>88</a><a href='#L89' id='L89'>89</a><a href='#L90' id='L90'>90</a><a href='#L91' id='L91'>91</a><a href='#L92' id='L92'>92</a><a href='#L93' id='L93'>93</a><a href='#L94' id='L94'>94</a><a href='#L95' id='L95'>95</a><a href='#L96' id='L96'>96</a><a href='#L97' id='L97'>97</a><a href='#L98' id='L98'>98</a><a href='#L99' id='L99'>99</a><a href='#L100' id='L100'>100</a><a href='#L101' id='L101'>101</a><a href='#L102' id='L102'>102</a><a href='#L103' id='L103'>103</a><a href='#L104' id='L104'>104</a><a href='#L105' id='L105'>105</a><a href='#L106' id='L106'>106</a><a href='#L107' id='L107'>107</a><a href='#L108' id='L108'>108</a><a href='#L109' id='L109'>109</a><a href='#L110' id='L110'>110</a><a href='#L111' id='L111'>111</a><a href='#L112' id='L112'>112</a><a href='#L113' id='L113'>113</a><a href='#L114' id='L114'>114</a><a href='#L115' id='L115'>115</a><a href='#L116' id='L116'>116</a><a href='#L117' id='L117'>117</a><a href='#L118' id='L118'>118</a><a href='#L119' id='L119'>119</a><a href='#L120' id='L120'>120</a><a href='#L121' id='L121'>121</a><a href='#L122' id='L122'>122</a><a href='#L123' id='L123'>123</a><a href='#L124' id='L124'>124</a><a href='#L125' id='L125'>125</a><a href='#L126' id='L126'>126</a><a href='#L127' id='L127'>127</a><a href='#L128' id='L128'>128</a><a href='#L129' id='L129'>129</a><a href='#L130' id='L130'>130</a><a href='#L131' id='L131'>131</a><a href='#L132' id='L132'>132</a><a href='#L133' id='L133'>133</a><a href='#L134' id='L134'>134</a><a href='#L135' id='L135'>135</a><a href='#L136' id='L136'>136</a><a href='#L137' id='L137'>137</a><a href='#L138' id='L138'>138</a><a href='#L139' id='L139'>139</a><a href='#L140' id='L140'>140</a><a href='#L141' id='L141'>141</a><a href='#L142' id='L142'>142</a><a href='#L143' id='L143'>143</a><a href='#L144' id='L144'>144</a><a href='#L145' id='L145'>145</a><a href='#L146' id='L146'>146</a><a href='#L147' id='L147'>147</a><a href='#L148' id='L148'>148</a><a href='#L149' id='L149'>149</a><a href='#L150' id='L150'>150</a><a href='#L151' id='L151'>151</a><a href='#L152' id='L152'>152</a><a href='#L153' id='L153'>153</a><a href='#L154' id='L154'>154</a><a href='#L155' id='L155'>155</a><a href='#L156' id='L156'>156</a><a href='#L157' id='L157'>157</a><a href='#L158' id='L158'>158</a><a href='#L159' id='L159'>159</a><a href='#L160' id='L160'>160</a><a href='#L161' id='L161'>161</a><a href='#L162' id='L162'>162</a><a href='#L163' id='L163'>163</a><a href='#L164' id='L164'>164</a><a href='#L165' id='L165'>165</a><a href='#L166' id='L166'>166</a><a href='#L167' id='L167'>167</a><a href='#L168' id='L168'>168</a><a href='#L169' id='L169'>169</a><a href='#L170' id='L170'>170</a><a href='#L171' id='L171'>171</a><a href='#L172' id='L172'>172</a><a href='#L173' id='L173'>173</a><a href='#L174' id='L174'>174</a><a href='#L175' id='L175'>175</a><a href='#L176' id='L176'>176</a><a href='#L177' id='L177'>177</a><a href='#L178' id='L178'>178</a><a href='#L179' id='L179'>179</a><a href='#L180' id='L180'>180</a><a href='#L181' id='L181'>181</a><a href='#L182' id='L182'>182</a><a href='#L183' id='L183'>183</a><a href='#L184' id='L184'>184</a><a href='#L185' id='L185'>185</a><a href='#L186' id='L186'>186</a><a href='#L187' id='L187'>187</a><a href='#L188' id='L188'>188</a><a href='#L189' id='L189'>189</a><a href='#L190' id='L190'>190</a><a href='#L191' id='L191'>191</a><a href='#L192' id='L192'>192</a><a href='#L193' id='L193'>193</a><a href='#L194' id='L194'>194</a><a href='#L195' id='L195'>195</a><a href='#L196' id='L196'>196</a><a href='#L197' id='L197'>197</a><a href='#L198' id='L198'>198</a><a href='#L199' id='L199'>199</a><a href='#L200' id='L200'>200</a><a href='#L201' id='L201'>201</a><a href='#L202' id='L202'>202</a><a href='#L203' id='L203'>203</a><a href='#L204' id='L204'>204</a><a href='#L205' id='L205'>205</a><a href='#L206' id='L206'>206</a><a href='#L207' id='L207'>207</a><a href='#L208' id='L208'>208</a><a href='#L209' id='L209'>209</a><a href='#L210' id='L210'>210</a><a href='#L211' id='L211'>211</a><a href='#L212' id='L212'>212</a><a href='#L213' id='L213'>213</a><a href='#L214' id='L214'>214</a><a href='#L215' id='L215'>215</a><a href='#L216' id='L216'>216</a><a href='#L217' id='L217'>217</a><a href='#L218' id='L218'>218</a><a href='#L219' id='L219'>219</a><a href='#L220' id='L220'>220</a><a href='#L221' id='L221'>221</a><a href='#L222' id='L222'>222</a><a href='#L223' id='L223'>223</a><a href='#L224' id='L224'>224</a><a href='#L225' id='L225'>225</a><a href='#L226' id='L226'>226</a><a href='#L227' id='L227'>227</a><a href='#L228' id='L228'>228</a><a href='#L229' id='L229'>229</a><a href='#L230' id='L230'>230</a><a href='#L231' id='L231'>231</a><a href='#L232' id='L232'>232</a><a href='#L233' id='L233'>233</a><a href='#L234' id='L234'>234</a><a href='#L235' id='L235'>235</a><a href='#L236' id='L236'>236</a><a href='#L237' id='L237'>237</a><a href='#L238' id='L238'>238</a><a href='#L239' id='L239'>239</a><a href='#L240' id='L240'>240</a><a href='#L241' id='L241'>241</a><a href='#L242' id='L242'>242</a><a href='#L243' id='L243'>243</a><a href='#L244' id='L244'>244</a><a href='#L245' id='L245'>245</a><a href='#L246' id='L246'>246</a><a href='#L247' id='L247'>247</a><a href='#L248' id='L248'>248</a><a href='#L249' id='L249'>249</a><a href='#L250' id='L250'>250</a><a href='#L251' id='L251'>251</a><a href='#L252' id='L252'>252</a><a href='#L253' id='L253'>253</a><a href='#L254' id='L254'>254</a><a href='#L255' id='L255'>255</a><a href='#L256' id='L256'>256</a><a href='#L257' id='L257'>257</a><a href='#L258' id='L258'>258</a><a href='#L259' id='L259'>259</a><a href='#L260' id='L260'>260</a><a href='#L261' id='L261'>261</a><a href='#L262' id='L262'>262</a><a href='#L263' id='L263'>263</a><a href='#L264' id='L264'>264</a><a href='#L265' id='L265'>265</a><a href='#L266' id='L266'>266</a><a href='#L267' id='L267'>267</a><a href='#L268' id='L268'>268</a><a href='#L269' id='L269'>269</a><a href='#L270' id='L270'>270</a><a href='#L271' id='L271'>271</a><a href='#L272' id='L272'>272</a><a href='#L273' id='L273'>273</a><a href='#L274' id='L274'>274</a><a href='#L275' id='L275'>275</a><a href='#L276' id='L276'>276</a><a href='#L277' id='L277'>277</a><a href='#L278' id='L278'>278</a><a href='#L279' id='L279'>279</a><a href='#L280' id='L280'>280</a><a href='#L281' id='L281'>281</a><a href='#L282' id='L282'>282</a><a href='#L283' id='L283'>283</a><a href='#L284' id='L284'>284</a><a href='#L285' id='L285'>285</a><a href='#L286' id='L286'>286</a><a href='#L287' id='L287'>287</a><a href='#L288' id='L288'>288</a><a href='#L289' id='L289'>289</a><a href='#L290' id='L290'>290</a><a href='#L291' id='L291'>291</a><a href='#L292' id='L292'>292</a><a href='#L293' id='L293'>293</a><a href='#L294' id='L294'>294</a><a href='#L295' id='L295'>295</a><a href='#L296' id='L296'>296</a><a href='#L297' id='L297'>297</a><a href='#L298' id='L298'>298</a><a href='#L299' id='L299'>299</a><a href='#L300' id='L300'>300</a><a href='#L301' id='L301'>301</a><a href='#L302' id='L302'>302</a><a href='#L303' id='L303'>303</a><a href='#L304' id='L304'>304</a><a href='#L305' id='L305'>305</a><a href='#L306' id='L306'>306</a><a href='#L307' id='L307'>307</a><a href='#L308' id='L308'>308</a><a href='#L309' id='L309'>309</a><a href='#L310' id='L310'>310</a><a href='#L311' id='L311'>311</a><a href='#L312' id='L312'>312</a><a href='#L313' id='L313'>313</a><a href='#L314' id='L314'>314</a><a href='#L315' id='L315'>315</a><a href='#L316' id='L316'>316</a><a href='#L317' id='L317'>317</a><a href='#L318' id='L318'>318</a><a href='#L319' id='L319'>319</a><a href='#L320' id='L320'>320</a><a href='#L321' id='L321'>321</a><a href='#L322' id='L322'>322</a><a href='#L323' id='L323'>323</a><a href='#L324' id='L324'>324</a><a href='#L325' id='L325'>325</a><a href='#L326' id='L326'>326</a><a href='#L327' id='L327'>327</a><a href='#L328' id='L328'>328</a><a href='#L329' id='L329'>329</a><a href='#L330' id='L330'>330</a><a href='#L331' id='L331'>331</a><a href='#L332' id='L332'>332</a><a href='#L333' id='L333'>333</a><a href='#L334' id='L334'>334</a><a href='#L335' id='L335'>335</a><a href='#L336' id='L336'>336</a><a href='#L337' id='L337'>337</a><a href='#L338' id='L338'>338</a><a href='#L339' id='L339'>339</a><a href='#L340' id='L340'>340</a><a href='#L341' id='L341'>341</a><a href='#L342' id='L342'>342</a><a href='#L343' id='L343'>343</a><a href='#L344' id='L344'>344</a><a href='#L345' id='L345'>345</a><a href='#L346' id='L346'>346</a><a href='#L347' id='L347'>347</a><a href='#L348' id='L348'>348</a><a href='#L349' id='L349'>349</a><a href='#L350' id='L350'>350</a><a href='#L351' id='L351'>351</a><a href='#L352' id='L352'>352</a><a href='#L353' id='L353'>353</a><a href='#L354' id='L354'>354</a><a href='#L355' id='L355'>355</a><a href='#L356' id='L356'>356</a><a href='#L357' id='L357'>357</a><a href='#L358' id='L358'>358</a><a href='#L359' id='L359'>359</a><a href='#L360' id='L360'>360</a><a href='#L361' id='L361'>361</a><a href='#L362' id='L362'>362</a><a href='#L363' id='L363'>363</a><a href='#L364' id='L364'>364</a><a href='#L365' id='L365'>365</a><a href='#L366' id='L366'>366</a><a href='#L367' id='L367'>367</a><a href='#L368' id='L368'>368</a><a href='#L369' id='L369'>369</a><a href='#L370' id='L370'>370</a><a href='#L371' id='L371'>371</a><a href='#L372' id='L372'>372</a><a href='#L373' id='L373'>373</a><a href='#L374' id='L374'>374</a><a href='#L375' id='L375'>375</a><a href='#L376' id='L376'>376</a><a href='#L377' id='L377'>377</a><a href='#L378' id='L378'>378</a><a href='#L379' id='L379'>379</a><a href='#L380' id='L380'>380</a><a href='#L381' id='L381'>381</a><a href='#L382' id='L382'>382</a><a href='#L383' id='L383'>383</a><a href='#L384' id='L384'>384</a><a href='#L385' id='L385'>385</a><a href='#L386' id='L386'>386</a><a href='#L387' id='L387'>387</a><a href='#L388' id='L388'>388</a><a href='#L389' id='L389'>389</a><a href='#L390' id='L390'>390</a><a href='#L391' id='L391'>391</a><a href='#L392' id='L392'>392</a><a href='#L393' id='L393'>393</a><a href='#L394' id='L394'>394</a><a href='#L395' id='L395'>395</a><a href='#L396' id='L396'>396</a><a href='#L397' id='L397'>397</a><a href='#L398' id='L398'>398</a><a href='#L399' id='L399'>399</a><a href='#L400' id='L400'>400</a><a href='#L401' id='L401'>401</a><a href='#L402' id='L402'>402</a><a href='#L403' id='L403'>403</a><a href='#L404' id='L404'>404</a><a href='#L405' id='L405'>405</a><a href='#L406' id='L406'>406</a><a href='#L407' id='L407'>407</a><a href='#L408' id='L408'>408</a><a href='#L409' id='L409'>409</a><a href='#L410' id='L410'>410</a><a href='#L411' id='L411'>411</a><a href='#L412' id='L412'>412</a><a href='#L413' id='L413'>413</a><a href='#L414' id='L414'>414</a><a href='#L415' id='L415'>415</a><a href='#L416' id='L416'>416</a><a href='#L417' id='L417'>417</a><a href='#L418' id='L418'>418</a><a href='#L419' id='L419'>419</a><a href='#L420' id='L420'>420</a><a href='#L421' id='L421'>421</a><a href='#L422' id='L422'>422</a><a href='#L423' id='L423'>423</a><a href='#L424' id='L424'>424</a><a href='#L425' id='L425'>425</a><a href='#L426' id='L426'>426</a><a href='#L427' id='L427'>427</a><a href='#L428' id='L428'>428</a><a href='#L429' id='L429'>429</a><a href='#L430' id='L430'>430</a><a href='#L431' id='L431'>431</a><a href='#L432' id='L432'>432</a><a href='#L433' id='L433'>433</a><a href='#L434' id='L434'>434</a><a href='#L435' id='L435'>435</a><a href='#L436' id='L436'>436</a><a href='#L437' id='L437'>437</a><a href='#L438' id='L438'>438</a><a href='#L439' id='L439'>439</a><a href='#L440' id='L440'>440</a><a href='#L441' id='L441'>441</a><a href='#L442' id='L442'>442</a><a href='#L443' id='L443'>443</a><a href='#L444' id='L444'>444</a><a href='#L445' id='L445'>445</a><a href='#L446' id='L446'>446</a><a href='#L447' id='L447'>447</a><a href='#L448' id='L448'>448</a><a href='#L449' id='L449'>449</a><a href='#L450' id='L450'>450</a><a href='#L451' id='L451'>451</a><a href='#L452' id='L452'>452</a><a href='#L453' id='L453'>453</a><a href='#L454' id='L454'>454</a><a href='#L455' id='L455'>455</a><a href='#L456' id='L456'>456</a><a href='#L457' id='L457'>457</a><a href='#L458' id='L458'>458</a><a href='#L459' id='L459'>459</a><a href='#L460' id='L460'>460</a><a href='#L461' id='L461'>461</a><a href='#L462' id='L462'>462</a><a href='#L463' id='L463'>463</a><a href='#L464' id='L464'>464</a><a href='#L465' id='L465'>465</a><a href='#L466' id='L466'>466</a><a href='#L467' id='L467'>467</a><a href='#L468' id='L468'>468</a><a href='#L469' id='L469'>469</a><a href='#L470' id='L470'>470</a><a href='#L471' id='L471'>471</a><a href='#L472' id='L472'>472</a><a href='#L473' id='L473'>473</a><a href='#L474' id='L474'>474</a><a href='#L475' id='L475'>475</a><a href='#L476' id='L476'>476</a><a href='#L477' id='L477'>477</a><a href='#L478' id='L478'>478</a><a href='#L479' id='L479'>479</a><a href='#L480' id='L480'>480</a><a href='#L481' id='L481'>481</a><a href='#L482' id='L482'>482</a><a href='#L483' id='L483'>483</a><a href='#L484' id='L484'>484</a><a href='#L485' id='L485'>485</a><a href='#L486' id='L486'>486</a><a href='#L487' id='L487'>487</a><a href='#L488' id='L488'>488</a><a href='#L489' id='L489'>489</a><a href='#L490' id='L490'>490</a><a href='#L491' id='L491'>491</a><a href='#L492' id='L492'>492</a><a href='#L493' id='L493'>493</a><a href='#L494' id='L494'>494</a><a href='#L495' id='L495'>495</a><a href='#L496' id='L496'>496</a><a href='#L497' id='L497'>497</a><a href='#L498' id='L498'>498</a><a href='#L499' id='L499'>499</a><a href='#L500' id='L500'>500</a><a href='#L501' id='L501'>501</a><a href='#L502' id='L502'>502</a><a href='#L503' id='L503'>503</a><a href='#L504' id='L504'>504</a><a href='#L505' id='L505'>505</a><a href='#L506' id='L506'>506</a><a href='#L507' id='L507'>507</a><a href='#L508' id='L508'>508</a><a href='#L509' id='L509'>509</a><a href='#L510' id='L510'>510</a><a href='#L511' id='L511'>511</a><a href='#L512' id='L512'>512</a><a href='#L513' id='L513'>513</a><a href='#L514' id='L514'>514</a><a href='#L515' id='L515'>515</a><a href='#L516' id='L516'>516</a><a href='#L517' id='L517'>517</a><a href='#L518' id='L518'>518</a><a href='#L519' id='L519'>519</a><a href='#L520' id='L520'>520</a><a href='#L521' id='L521'>521</a><a href='#L522' id='L522'>522</a><a href='#L523' id='L523'>523</a><a href='#L524' id='L524'>524</a><a href='#L525' id='L525'>525</a><a href='#L526' id='L526'>526</a><a href='#L527' id='L527'>527</a><a href='#L528' id='L528'>528</a></div><div class="highlight markdown-code-block"><pre class=""><div class='line' id='LC1'><span class="cm">/**</span>&#x000A;</div><div class='line' id='LC2'><span class="cm"> </span>&#x000A;</div><div class='line' id='LC3'><span class="cm"> @Name：dropdown 下拉菜单组件</span>&#x000A;</div><div class='line' id='LC4'><span class="cm"> @License：MIT</span>&#x000A;</div><div class='line' id='LC5'>&#x000A;</div><div class='line' id='LC6'><span class="cm"> */</span>&#x000A;</div><div class='line' id='LC7'>&#x000A;</div><div class='line' id='LC8'><span class="nx">layui</span><span class="p">.</span><span class="nx">define</span><span class="p">([</span><span class="dl">'</span><span class="s1">jquery</span><span class="dl">'</span><span class="p">,</span> <span class="dl">'</span><span class="s1">laytpl</span><span class="dl">'</span><span class="p">,</span> <span class="dl">'</span><span class="s1">lay</span><span class="dl">'</span><span class="p">],</span> <span class="kd">function</span><span class="p">(</span><span class="nx">exports</span><span class="p">){</span>&#x000A;</div><div class='line' id='LC9'>  <span class="dl">"</span><span class="s2">use strict</span><span class="dl">"</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC10'>  &#x000A;</div><div class='line' id='LC11'>  <span class="kd">var</span> <span class="nx">$</span> <span class="o">=</span> <span class="nx">layui</span><span class="p">.</span><span class="nx">$</span>&#x000A;</div><div class='line' id='LC12'>  <span class="p">,</span><span class="nx">laytpl</span> <span class="o">=</span> <span class="nx">layui</span><span class="p">.</span><span class="nx">laytpl</span>&#x000A;</div><div class='line' id='LC13'>  <span class="p">,</span><span class="nx">hint</span> <span class="o">=</span> <span class="nx">layui</span><span class="p">.</span><span class="nx">hint</span><span class="p">()</span>&#x000A;</div><div class='line' id='LC14'>  <span class="p">,</span><span class="nx">device</span> <span class="o">=</span> <span class="nx">layui</span><span class="p">.</span><span class="nx">device</span><span class="p">()</span>&#x000A;</div><div class='line' id='LC15'>  <span class="p">,</span><span class="nx">clickOrMousedown</span> <span class="o">=</span> <span class="p">(</span><span class="nx">device</span><span class="p">.</span><span class="nx">mobile</span> <span class="p">?</span> <span class="dl">'</span><span class="s1">click</span><span class="dl">'</span> <span class="p">:</span> <span class="dl">'</span><span class="s1">mousedown</span><span class="dl">'</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC16'>  &#x000A;</div><div class='line' id='LC17'>  <span class="c1">//模块名</span>&#x000A;</div><div class='line' id='LC18'>  <span class="p">,</span><span class="nx">MOD_NAME</span> <span class="o">=</span> <span class="dl">'</span><span class="s1">dropdown</span><span class="dl">'</span>&#x000A;</div><div class='line' id='LC19'>  <span class="p">,</span><span class="nx">MOD_INDEX</span> <span class="o">=</span> <span class="dl">'</span><span class="s1">layui_</span><span class="dl">'</span><span class="o">+</span> <span class="nx">MOD_NAME</span> <span class="o">+</span><span class="dl">'</span><span class="s1">_index</span><span class="dl">'</span> <span class="c1">//模块索引名</span>&#x000A;</div><div class='line' id='LC20'>&#x000A;</div><div class='line' id='LC21'>  <span class="c1">//外部接口</span>&#x000A;</div><div class='line' id='LC22'>  <span class="p">,</span><span class="nx">dropdown</span> <span class="o">=</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC23'>    <span class="na">config</span><span class="p">:</span> <span class="p">{}</span>&#x000A;</div><div class='line' id='LC24'>    <span class="p">,</span><span class="na">index</span><span class="p">:</span> <span class="nx">layui</span><span class="p">[</span><span class="nx">MOD_NAME</span><span class="p">]</span> <span class="p">?</span> <span class="p">(</span><span class="nx">layui</span><span class="p">[</span><span class="nx">MOD_NAME</span><span class="p">].</span><span class="nx">index</span> <span class="o">+</span> <span class="mi">10000</span><span class="p">)</span> <span class="p">:</span> <span class="mi">0</span>&#x000A;</div><div class='line' id='LC25'>&#x000A;</div><div class='line' id='LC26'>    <span class="c1">//设置全局项</span>&#x000A;</div><div class='line' id='LC27'>    <span class="p">,</span><span class="na">set</span><span class="p">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">){</span>&#x000A;</div><div class='line' id='LC28'>      <span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC29'>      <span class="nx">that</span><span class="p">.</span><span class="nx">config</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="nx">that</span><span class="p">.</span><span class="nx">config</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC30'>      <span class="k">return</span> <span class="nx">that</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC31'>    <span class="p">}</span>&#x000A;</div><div class='line' id='LC32'>    &#x000A;</div><div class='line' id='LC33'>    <span class="c1">//事件</span>&#x000A;</div><div class='line' id='LC34'>    <span class="p">,</span><span class="na">on</span><span class="p">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">events</span><span class="p">,</span> <span class="nx">callback</span><span class="p">){</span>&#x000A;</div><div class='line' id='LC35'>      <span class="k">return</span> <span class="nx">layui</span><span class="p">.</span><span class="nx">onevent</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">MOD_NAME</span><span class="p">,</span> <span class="nx">events</span><span class="p">,</span> <span class="nx">callback</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC36'>    <span class="p">}</span>&#x000A;</div><div class='line' id='LC37'>  <span class="p">}</span>&#x000A;</div><div class='line' id='LC38'>&#x000A;</div><div class='line' id='LC39'>  <span class="c1">//操作当前实例</span>&#x000A;</div><div class='line' id='LC40'>  <span class="p">,</span><span class="nx">thisModule</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span>&#x000A;</div><div class='line' id='LC41'>    <span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span>&#x000A;</div><div class='line' id='LC42'>    <span class="p">,</span><span class="nx">options</span> <span class="o">=</span> <span class="nx">that</span><span class="p">.</span><span class="nx">config</span>&#x000A;</div><div class='line' id='LC43'>    <span class="p">,</span><span class="nx">id</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">id</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC44'>&#x000A;</div><div class='line' id='LC45'>    <span class="nx">thisModule</span><span class="p">.</span><span class="nx">that</span><span class="p">[</span><span class="nx">id</span><span class="p">]</span> <span class="o">=</span> <span class="nx">that</span><span class="p">;</span> <span class="c1">//记录当前实例对象</span>&#x000A;</div><div class='line' id='LC46'>&#x000A;</div><div class='line' id='LC47'>    <span class="k">return</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC48'>      <span class="na">config</span><span class="p">:</span> <span class="nx">options</span>&#x000A;</div><div class='line' id='LC49'>      <span class="c1">//重置实例</span>&#x000A;</div><div class='line' id='LC50'>      <span class="p">,</span><span class="na">reload</span><span class="p">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">){</span>&#x000A;</div><div class='line' id='LC51'>        <span class="nx">that</span><span class="p">.</span><span class="nx">reload</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">that</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC52'>      <span class="p">}</span>&#x000A;</div><div class='line' id='LC53'>    <span class="p">}</span>&#x000A;</div><div class='line' id='LC54'>  <span class="p">}</span>&#x000A;</div><div class='line' id='LC55'>&#x000A;</div><div class='line' id='LC56'>  <span class="c1">//字符常量</span>&#x000A;</div><div class='line' id='LC57'>  <span class="p">,</span><span class="nx">STR_ELEM</span> <span class="o">=</span> <span class="dl">'</span><span class="s1">layui-dropdown</span><span class="dl">'</span><span class="p">,</span> <span class="nx">STR_HIDE</span> <span class="o">=</span> <span class="dl">'</span><span class="s1">layui-hide</span><span class="dl">'</span><span class="p">,</span> <span class="nx">STR_DISABLED</span> <span class="o">=</span> <span class="dl">'</span><span class="s1">layui-disabled</span><span class="dl">'</span><span class="p">,</span> <span class="nx">STR_NONE</span> <span class="o">=</span> <span class="dl">'</span><span class="s1">layui-none</span><span class="dl">'</span>&#x000A;</div><div class='line' id='LC58'>  <span class="p">,</span><span class="nx">STR_ITEM_UP</span> <span class="o">=</span> <span class="dl">'</span><span class="s1">layui-menu-item-up</span><span class="dl">'</span><span class="p">,</span> <span class="nx">STR_ITEM_DOWN</span> <span class="o">=</span> <span class="dl">'</span><span class="s1">layui-menu-item-down</span><span class="dl">'</span><span class="p">,</span> <span class="nx">STR_MENU_TITLE</span> <span class="o">=</span> <span class="dl">'</span><span class="s1">layui-menu-body-title</span><span class="dl">'</span><span class="p">,</span> <span class="nx">STR_ITEM_GROUP</span> <span class="o">=</span> <span class="dl">'</span><span class="s1">layui-menu-item-group</span><span class="dl">'</span><span class="p">,</span> <span class="nx">STR_ITEM_PARENT</span> <span class="o">=</span> <span class="dl">'</span><span class="s1">layui-menu-item-parent</span><span class="dl">'</span><span class="p">,</span> <span class="nx">STR_ITEM_DIV</span> <span class="o">=</span> <span class="dl">'</span><span class="s1">layui-menu-item-divider</span><span class="dl">'</span><span class="p">,</span> <span class="nx">STR_ITEM_CHECKED</span> <span class="o">=</span> <span class="dl">'</span><span class="s1">layui-menu-item-checked</span><span class="dl">'</span><span class="p">,</span> <span class="nx">STR_ITEM_CHECKED2</span> <span class="o">=</span> <span class="dl">'</span><span class="s1">layui-menu-item-checked2</span><span class="dl">'</span><span class="p">,</span> <span class="nx">STR_MENU_PANEL</span> <span class="o">=</span> <span class="dl">'</span><span class="s1">layui-menu-body-panel</span><span class="dl">'</span><span class="p">,</span> <span class="nx">STR_MENU_PANEL_L</span> <span class="o">=</span> <span class="dl">'</span><span class="s1">layui-menu-body-panel-left</span><span class="dl">'</span>&#x000A;</div><div class='line' id='LC59'>  &#x000A;</div><div class='line' id='LC60'>  <span class="p">,</span><span class="nx">STR_GROUP_TITLE</span> <span class="o">=</span> <span class="dl">'</span><span class="s1">.</span><span class="dl">'</span><span class="o">+</span> <span class="nx">STR_ITEM_GROUP</span> <span class="o">+</span> <span class="dl">'</span><span class="s1">&gt;.</span><span class="dl">'</span><span class="o">+</span> <span class="nx">STR_MENU_TITLE</span>&#x000A;</div><div class='line' id='LC61'>&#x000A;</div><div class='line' id='LC62'>  <span class="c1">//构造器</span>&#x000A;</div><div class='line' id='LC63'>  <span class="p">,</span><span class="nx">Class</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">){</span>&#x000A;</div><div class='line' id='LC64'>    <span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC65'>    <span class="nx">that</span><span class="p">.</span><span class="nx">index</span> <span class="o">=</span> <span class="o">++</span><span class="nx">dropdown</span><span class="p">.</span><span class="nx">index</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC66'>    <span class="nx">that</span><span class="p">.</span><span class="nx">config</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="nx">that</span><span class="p">.</span><span class="nx">config</span><span class="p">,</span> <span class="nx">dropdown</span><span class="p">.</span><span class="nx">config</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC67'>    <span class="nx">that</span><span class="p">.</span><span class="nx">init</span><span class="p">();</span>&#x000A;</div><div class='line' id='LC68'>  <span class="p">};</span>&#x000A;</div><div class='line' id='LC69'>&#x000A;</div><div class='line' id='LC70'>  <span class="c1">//默认配置</span>&#x000A;</div><div class='line' id='LC71'>  <span class="nx">Class</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">config</span> <span class="o">=</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC72'>    <span class="na">trigger</span><span class="p">:</span> <span class="dl">'</span><span class="s1">click</span><span class="dl">'</span> <span class="c1">//事件类型</span>&#x000A;</div><div class='line' id='LC73'>    <span class="p">,</span><span class="na">content</span><span class="p">:</span> <span class="dl">''</span> <span class="c1">//自定义菜单内容</span>&#x000A;</div><div class='line' id='LC74'>    <span class="p">,</span><span class="na">className</span><span class="p">:</span> <span class="dl">''</span> <span class="c1">//自定义样式类名</span>&#x000A;</div><div class='line' id='LC75'>    <span class="p">,</span><span class="na">style</span><span class="p">:</span> <span class="dl">''</span> <span class="c1">//设置面板 style 属性</span>&#x000A;</div><div class='line' id='LC76'>    <span class="p">,</span><span class="na">show</span><span class="p">:</span> <span class="kc">false</span> <span class="c1">//是否初始即显示菜单面板</span>&#x000A;</div><div class='line' id='LC77'>    <span class="p">,</span><span class="na">isAllowSpread</span><span class="p">:</span> <span class="kc">true</span> <span class="c1">//是否允许菜单组展开收缩</span>&#x000A;</div><div class='line' id='LC78'>    <span class="p">,</span><span class="na">isSpreadItem</span><span class="p">:</span> <span class="kc">true</span> <span class="c1">//是否初始展开子菜单</span>&#x000A;</div><div class='line' id='LC79'>    <span class="p">,</span><span class="na">data</span><span class="p">:</span> <span class="p">[]</span> <span class="c1">//菜单数据结构</span>&#x000A;</div><div class='line' id='LC80'>    <span class="p">,</span><span class="na">delay</span><span class="p">:</span> <span class="mi">300</span> <span class="c1">//延迟关闭的毫秒数，若 trigger 为 hover 时才生效</span>&#x000A;</div><div class='line' id='LC81'>  <span class="p">};</span>&#x000A;</div><div class='line' id='LC82'>  &#x000A;</div><div class='line' id='LC83'>  <span class="c1">//重载实例</span>&#x000A;</div><div class='line' id='LC84'>  <span class="nx">Class</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">reload</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">){</span>&#x000A;</div><div class='line' id='LC85'>    <span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC86'>    <span class="nx">that</span><span class="p">.</span><span class="nx">config</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="nx">that</span><span class="p">.</span><span class="nx">config</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC87'>    <span class="nx">that</span><span class="p">.</span><span class="nx">init</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC88'>  <span class="p">};</span>&#x000A;</div><div class='line' id='LC89'>&#x000A;</div><div class='line' id='LC90'>  <span class="c1">//初始化准备</span>&#x000A;</div><div class='line' id='LC91'>  <span class="nx">Class</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">init</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">rerender</span><span class="p">){</span>&#x000A;</div><div class='line' id='LC92'>    <span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span>&#x000A;</div><div class='line' id='LC93'>    <span class="p">,</span><span class="nx">options</span> <span class="o">=</span> <span class="nx">that</span><span class="p">.</span><span class="nx">config</span>&#x000A;</div><div class='line' id='LC94'>    <span class="p">,</span><span class="nx">elem</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">elem</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">elem</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC95'>    &#x000A;</div><div class='line' id='LC96'>    <span class="c1">//若 elem 非唯一</span>&#x000A;</div><div class='line' id='LC97'>    <span class="k">if</span><span class="p">(</span><span class="nx">elem</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">1</span><span class="p">){</span>&#x000A;</div><div class='line' id='LC98'>      <span class="nx">layui</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">elem</span><span class="p">,</span> <span class="kd">function</span><span class="p">(){</span>&#x000A;</div><div class='line' id='LC99'>        <span class="nx">dropdown</span><span class="p">.</span><span class="nx">render</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="nx">options</span><span class="p">,</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC100'>          <span class="na">elem</span><span class="p">:</span> <span class="k">this</span>&#x000A;</div><div class='line' id='LC101'>        <span class="p">}));</span>&#x000A;</div><div class='line' id='LC102'>      <span class="p">});</span>&#x000A;</div><div class='line' id='LC103'>      <span class="k">return</span> <span class="nx">that</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC104'>    <span class="p">}</span>&#x000A;</div><div class='line' id='LC105'>&#x000A;</div><div class='line' id='LC106'>    <span class="c1">//若重复执行 render，则视为 reload 处理</span>&#x000A;</div><div class='line' id='LC107'>    <span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">rerender</span> <span class="o">&amp;&amp;</span> <span class="nx">elem</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="nx">MOD_INDEX</span><span class="p">)){;</span>&#x000A;</div><div class='line' id='LC108'>      <span class="kd">var</span> <span class="nx">newThat</span> <span class="o">=</span> <span class="nx">thisModule</span><span class="p">.</span><span class="nx">getThis</span><span class="p">(</span><span class="nx">elem</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="nx">MOD_INDEX</span><span class="p">));</span>&#x000A;</div><div class='line' id='LC109'>      <span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">newThat</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC110'>&#x000A;</div><div class='line' id='LC111'>      <span class="k">return</span> <span class="nx">newThat</span><span class="p">.</span><span class="nx">reload</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC112'>    <span class="p">};</span>&#x000A;</div><div class='line' id='LC113'>    &#x000A;</div><div class='line' id='LC114'>    <span class="c1">//初始化 id 参数</span>&#x000A;</div><div class='line' id='LC115'>    <span class="nx">options</span><span class="p">.</span><span class="nx">id</span> <span class="o">=</span> <span class="p">(</span><span class="dl">'</span><span class="s1">id</span><span class="dl">'</span> <span class="k">in</span> <span class="nx">options</span><span class="p">)</span> <span class="p">?</span> <span class="nx">options</span><span class="p">.</span><span class="nx">id</span> <span class="p">:</span> <span class="nx">that</span><span class="p">.</span><span class="nx">index</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC116'>    &#x000A;</div><div class='line' id='LC117'>    <span class="k">if</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">show</span><span class="p">)</span> <span class="nx">that</span><span class="p">.</span><span class="nx">render</span><span class="p">(</span><span class="nx">rerender</span><span class="p">);</span> <span class="c1">//初始即显示</span>&#x000A;</div><div class='line' id='LC118'>    <span class="nx">that</span><span class="p">.</span><span class="nx">events</span><span class="p">();</span> <span class="c1">//事件</span>&#x000A;</div><div class='line' id='LC119'>  <span class="p">};</span>&#x000A;</div><div class='line' id='LC120'>  &#x000A;</div><div class='line' id='LC121'>  <span class="c1">//渲染</span>&#x000A;</div><div class='line' id='LC122'>  <span class="nx">Class</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">render</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">rerender</span><span class="p">){</span>&#x000A;</div><div class='line' id='LC123'>    <span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span>&#x000A;</div><div class='line' id='LC124'>    <span class="p">,</span><span class="nx">options</span> <span class="o">=</span> <span class="nx">that</span><span class="p">.</span><span class="nx">config</span>&#x000A;</div><div class='line' id='LC125'>    <span class="p">,</span><span class="nx">elemBody</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="dl">'</span><span class="s1">body</span><span class="dl">'</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC126'>    &#x000A;</div><div class='line' id='LC127'>    <span class="c1">//默认菜单内容</span>&#x000A;</div><div class='line' id='LC128'>    <span class="p">,</span><span class="nx">getDefaultView</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span>&#x000A;</div><div class='line' id='LC129'>      <span class="kd">var</span> <span class="nx">elemUl</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="dl">'</span><span class="s1">&lt;ul class="layui-menu layui-dropdown-menu"&gt;&lt;/ul&gt;</span><span class="dl">'</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC130'>      <span class="k">if</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="p">){</span>&#x000A;</div><div class='line' id='LC131'>        <span class="nx">eachItemView</span><span class="p">(</span><span class="nx">elemUl</span><span class="p">,</span> <span class="nx">options</span><span class="p">.</span><span class="nx">data</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC132'>      <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC133'>        <span class="nx">elemUl</span><span class="p">.</span><span class="nx">html</span><span class="p">(</span><span class="dl">'</span><span class="s1">&lt;li class="layui-menu-item-none"&gt;no menu&lt;/li&gt;</span><span class="dl">'</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC134'>      <span class="p">}</span>&#x000A;</div><div class='line' id='LC135'>      <span class="k">return</span> <span class="nx">elemUl</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC136'>    <span class="p">}</span>&#x000A;</div><div class='line' id='LC137'>    &#x000A;</div><div class='line' id='LC138'>    <span class="c1">//遍历菜单项</span>&#x000A;</div><div class='line' id='LC139'>    <span class="p">,</span><span class="nx">eachItemView</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">views</span><span class="p">,</span> <span class="nx">data</span><span class="p">){</span>&#x000A;</div><div class='line' id='LC140'>      <span class="c1">//var views = [];</span>&#x000A;</div><div class='line' id='LC141'>      <span class="nx">layui</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">index</span><span class="p">,</span> <span class="nx">item</span><span class="p">){</span>&#x000A;</div><div class='line' id='LC142'>        <span class="c1">//是否存在子级</span>&#x000A;</div><div class='line' id='LC143'>        <span class="kd">var</span> <span class="nx">isChild</span> <span class="o">=</span> <span class="nx">item</span><span class="p">.</span><span class="nx">child</span> <span class="o">&amp;&amp;</span> <span class="nx">item</span><span class="p">.</span><span class="nx">child</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span>&#x000A;</div><div class='line' id='LC144'>        <span class="p">,</span><span class="nx">isSpreadItem</span> <span class="o">=</span> <span class="p">(</span><span class="dl">'</span><span class="s1">isSpreadItem</span><span class="dl">'</span> <span class="k">in</span> <span class="nx">item</span><span class="p">)</span> <span class="p">?</span> <span class="nx">item</span><span class="p">.</span><span class="nx">isSpreadItem</span> <span class="p">:</span> <span class="nx">options</span><span class="p">.</span><span class="nx">isSpreadItem</span>&#x000A;</div><div class='line' id='LC145'>        <span class="p">,</span><span class="nx">title</span> <span class="o">=</span> <span class="nx">item</span><span class="p">.</span><span class="nx">templet</span> &#x000A;</div><div class='line' id='LC146'>          <span class="p">?</span> <span class="nx">laytpl</span><span class="p">(</span><span class="nx">item</span><span class="p">.</span><span class="nx">templet</span><span class="p">).</span><span class="nx">render</span><span class="p">(</span><span class="nx">item</span><span class="p">)</span> &#x000A;</div><div class='line' id='LC147'>        <span class="p">:</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">templet</span> <span class="p">?</span> <span class="nx">laytpl</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">templet</span><span class="p">).</span><span class="nx">render</span><span class="p">(</span><span class="nx">item</span><span class="p">)</span> <span class="p">:</span> <span class="nx">item</span><span class="p">.</span><span class="nx">title</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC148'>        &#x000A;</div><div class='line' id='LC149'>        <span class="c1">//初始类型</span>&#x000A;</div><div class='line' id='LC150'>        <span class="p">,</span><span class="nx">type</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span>&#x000A;</div><div class='line' id='LC151'>          <span class="k">if</span><span class="p">(</span><span class="nx">isChild</span><span class="p">){</span>&#x000A;</div><div class='line' id='LC152'>            <span class="nx">item</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="nx">item</span><span class="p">.</span><span class="nx">type</span> <span class="o">||</span> <span class="dl">'</span><span class="s1">parent</span><span class="dl">'</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC153'>          <span class="p">}</span>&#x000A;</div><div class='line' id='LC154'>          <span class="k">if</span><span class="p">(</span><span class="nx">item</span><span class="p">.</span><span class="nx">type</span><span class="p">){</span>&#x000A;</div><div class='line' id='LC155'>            <span class="k">return</span> <span class="p">({</span>&#x000A;</div><div class='line' id='LC156'>              <span class="na">group</span><span class="p">:</span> <span class="dl">'</span><span class="s1">group</span><span class="dl">'</span>&#x000A;</div><div class='line' id='LC157'>              <span class="p">,</span><span class="na">parent</span><span class="p">:</span> <span class="dl">'</span><span class="s1">parent</span><span class="dl">'</span>&#x000A;</div><div class='line' id='LC158'>              <span class="p">,</span><span class="dl">'</span><span class="s1">-</span><span class="dl">'</span><span class="p">:</span> <span class="dl">'</span><span class="s1">-</span><span class="dl">'</span>&#x000A;</div><div class='line' id='LC159'>            <span class="p">})[</span><span class="nx">item</span><span class="p">.</span><span class="nx">type</span><span class="p">]</span> <span class="o">||</span> <span class="dl">'</span><span class="s1">parent</span><span class="dl">'</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC160'>          <span class="p">}</span>&#x000A;</div><div class='line' id='LC161'>          <span class="k">return</span> <span class="dl">''</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC162'>        <span class="p">}();</span>&#x000A;</div><div class='line' id='LC163'>&#x000A;</div><div class='line' id='LC164'>        <span class="k">if</span><span class="p">(</span><span class="nx">type</span> <span class="o">!==</span> <span class="dl">'</span><span class="s1">-</span><span class="dl">'</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="o">!</span><span class="nx">item</span><span class="p">.</span><span class="nx">title</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">item</span><span class="p">.</span><span class="nx">id</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">isChild</span><span class="p">))</span> <span class="k">return</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC165'>        &#x000A;</div><div class='line' id='LC166'>        <span class="c1">//列表元素</span>&#x000A;</div><div class='line' id='LC167'>        <span class="kd">var</span> <span class="nx">viewLi</span> <span class="o">=</span> <span class="nx">$</span><span class="p">([</span><span class="dl">'</span><span class="s1">&lt;li</span><span class="dl">'</span><span class="o">+</span> <span class="kd">function</span><span class="p">(){</span>&#x000A;</div><div class='line' id='LC168'>          <span class="kd">var</span> <span class="nx">className</span> <span class="o">=</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC169'>            <span class="na">group</span><span class="p">:</span> <span class="dl">'</span><span class="s1">layui-menu-item-group</span><span class="dl">'</span><span class="o">+</span> <span class="p">(</span>&#x000A;</div><div class='line' id='LC170'>              <span class="nx">options</span><span class="p">.</span><span class="nx">isAllowSpread</span> <span class="p">?</span> <span class="p">(</span>&#x000A;</div><div class='line' id='LC171'>                <span class="nx">isSpreadItem</span> <span class="p">?</span> <span class="dl">'</span><span class="s1"> layui-menu-item-down</span><span class="dl">'</span> <span class="p">:</span> <span class="dl">'</span><span class="s1"> layui-menu-item-up</span><span class="dl">'</span>&#x000A;</div><div class='line' id='LC172'>              <span class="p">)</span> <span class="p">:</span> <span class="dl">''</span>&#x000A;</div><div class='line' id='LC173'>            <span class="p">)</span>&#x000A;</div><div class='line' id='LC174'>            <span class="p">,</span><span class="na">parent</span><span class="p">:</span> <span class="nx">STR_ITEM_PARENT</span>&#x000A;</div><div class='line' id='LC175'>            <span class="p">,</span><span class="dl">'</span><span class="s1">-</span><span class="dl">'</span><span class="p">:</span> <span class="dl">'</span><span class="s1">layui-menu-item-divider</span><span class="dl">'</span>&#x000A;</div><div class='line' id='LC176'>          <span class="p">};</span>&#x000A;</div><div class='line' id='LC177'>          <span class="k">if</span><span class="p">(</span><span class="nx">isChild</span> <span class="o">||</span> <span class="nx">type</span><span class="p">){</span>&#x000A;</div><div class='line' id='LC178'>            <span class="k">return</span> <span class="dl">'</span><span class="s1"> class="</span><span class="dl">'</span><span class="o">+</span> <span class="nx">className</span><span class="p">[</span><span class="nx">type</span><span class="p">]</span> <span class="o">+</span><span class="dl">'</span><span class="s1">"</span><span class="dl">'</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC179'>          <span class="p">}</span>&#x000A;</div><div class='line' id='LC180'>          <span class="k">return</span> <span class="dl">''</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC181'>        <span class="p">}()</span> <span class="o">+</span><span class="dl">'</span><span class="s1">&gt;</span><span class="dl">'</span>&#x000A;</div><div class='line' id='LC182'>        &#x000A;</div><div class='line' id='LC183'>          <span class="c1">//标题区</span>&#x000A;</div><div class='line' id='LC184'>          <span class="p">,</span><span class="kd">function</span><span class="p">(){</span>&#x000A;</div><div class='line' id='LC185'>            <span class="c1">//是否超文本</span>&#x000A;</div><div class='line' id='LC186'>            <span class="kd">var</span> <span class="nx">viewText</span> <span class="o">=</span> <span class="p">(</span><span class="dl">'</span><span class="s1">href</span><span class="dl">'</span> <span class="k">in</span> <span class="nx">item</span><span class="p">)</span> <span class="p">?</span> <span class="p">(</span>&#x000A;</div><div class='line' id='LC187'>              <span class="dl">'</span><span class="s1">&lt;a href="</span><span class="dl">'</span><span class="o">+</span> <span class="nx">item</span><span class="p">.</span><span class="nx">href</span> <span class="o">+</span><span class="dl">'</span><span class="s1">" target="</span><span class="dl">'</span><span class="o">+</span> <span class="p">(</span><span class="nx">item</span><span class="p">.</span><span class="nx">target</span> <span class="o">||</span> <span class="dl">'</span><span class="s1">_self</span><span class="dl">'</span><span class="p">)</span> <span class="o">+</span><span class="dl">'</span><span class="s1">"&gt;</span><span class="dl">'</span><span class="o">+</span> <span class="nx">title</span> <span class="o">+</span><span class="dl">'</span><span class="s1">&lt;/a&gt;</span><span class="dl">'</span>&#x000A;</div><div class='line' id='LC188'>            <span class="p">)</span> <span class="p">:</span> <span class="nx">title</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC189'>            &#x000A;</div><div class='line' id='LC190'>            <span class="c1">//是否存在子级</span>&#x000A;</div><div class='line' id='LC191'>            <span class="k">if</span><span class="p">(</span><span class="nx">isChild</span><span class="p">){</span>&#x000A;</div><div class='line' id='LC192'>              <span class="k">return</span> <span class="dl">'</span><span class="s1">&lt;div class="</span><span class="dl">'</span><span class="o">+</span> <span class="nx">STR_MENU_TITLE</span> <span class="o">+</span><span class="dl">'</span><span class="s1">"&gt;</span><span class="dl">'</span><span class="o">+</span> <span class="nx">viewText</span> <span class="o">+</span> <span class="kd">function</span><span class="p">(){</span>&#x000A;</div><div class='line' id='LC193'>                <span class="k">if</span><span class="p">(</span><span class="nx">type</span> <span class="o">===</span> <span class="dl">'</span><span class="s1">parent</span><span class="dl">'</span><span class="p">){</span>&#x000A;</div><div class='line' id='LC194'>                  <span class="k">return</span> <span class="dl">'</span><span class="s1">&lt;i class="layui-icon layui-icon-right"&gt;&lt;/i&gt;</span><span class="dl">'</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC195'>                <span class="p">}</span> <span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">type</span> <span class="o">===</span> <span class="dl">'</span><span class="s1">group</span><span class="dl">'</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">isAllowSpread</span><span class="p">){</span>&#x000A;</div><div class='line' id='LC196'>                  <span class="k">return</span> <span class="dl">'</span><span class="s1">&lt;i class="layui-icon layui-icon-</span><span class="dl">'</span><span class="o">+</span> <span class="p">(</span><span class="nx">isSpreadItem</span> <span class="p">?</span> <span class="dl">'</span><span class="s1">up</span><span class="dl">'</span> <span class="p">:</span> <span class="dl">'</span><span class="s1">down</span><span class="dl">'</span><span class="p">)</span> <span class="o">+</span><span class="dl">'</span><span class="s1">"&gt;&lt;/i&gt;</span><span class="dl">'</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC197'>                <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC198'>                  <span class="k">return</span> <span class="dl">''</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC199'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC200'>              <span class="p">}()</span> <span class="o">+</span><span class="dl">'</span><span class="s1">&lt;/div&gt;</span><span class="dl">'</span>&#x000A;</div><div class='line' id='LC201'>              &#x000A;</div><div class='line' id='LC202'>            <span class="p">}</span>&#x000A;</div><div class='line' id='LC203'>            <span class="k">return</span> <span class="dl">'</span><span class="s1">&lt;div class="</span><span class="dl">'</span><span class="o">+</span> <span class="nx">STR_MENU_TITLE</span> <span class="o">+</span><span class="dl">'</span><span class="s1">"&gt;</span><span class="dl">'</span><span class="o">+</span> <span class="nx">viewText</span> <span class="o">+</span><span class="dl">'</span><span class="s1">&lt;/div&gt;</span><span class="dl">'</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC204'>          <span class="p">}()</span>&#x000A;</div><div class='line' id='LC205'>        <span class="p">,</span><span class="dl">'</span><span class="s1">&lt;/li&gt;</span><span class="dl">'</span><span class="p">].</span><span class="nx">join</span><span class="p">(</span><span class="dl">''</span><span class="p">));</span>&#x000A;</div><div class='line' id='LC206'>        &#x000A;</div><div class='line' id='LC207'>        <span class="nx">viewLi</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="dl">'</span><span class="s1">item</span><span class="dl">'</span><span class="p">,</span> <span class="nx">item</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC208'>        &#x000A;</div><div class='line' id='LC209'>        <span class="c1">//子级区</span>&#x000A;</div><div class='line' id='LC210'>        <span class="k">if</span><span class="p">(</span><span class="nx">isChild</span><span class="p">){</span>&#x000A;</div><div class='line' id='LC211'>          <span class="kd">var</span> <span class="nx">elemPanel</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="dl">'</span><span class="s1">&lt;div class="layui-panel layui-menu-body-panel"&gt;&lt;/div&gt;</span><span class="dl">'</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC212'>          <span class="p">,</span><span class="nx">elemUl</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="dl">'</span><span class="s1">&lt;ul&gt;&lt;/ul&gt;</span><span class="dl">'</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC213'>&#x000A;</div><div class='line' id='LC214'>          <span class="k">if</span><span class="p">(</span><span class="nx">type</span> <span class="o">===</span> <span class="dl">'</span><span class="s1">parent</span><span class="dl">'</span><span class="p">){</span>&#x000A;</div><div class='line' id='LC215'>            <span class="nx">elemPanel</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="nx">eachItemView</span><span class="p">(</span><span class="nx">elemUl</span><span class="p">,</span> <span class="nx">item</span><span class="p">.</span><span class="nx">child</span><span class="p">));</span>&#x000A;</div><div class='line' id='LC216'>            <span class="nx">viewLi</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="nx">elemPanel</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC217'>          <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC218'>            <span class="nx">viewLi</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="nx">eachItemView</span><span class="p">(</span><span class="nx">elemUl</span><span class="p">,</span> <span class="nx">item</span><span class="p">.</span><span class="nx">child</span><span class="p">));</span>&#x000A;</div><div class='line' id='LC219'>          <span class="p">}</span>&#x000A;</div><div class='line' id='LC220'>        <span class="p">}</span>&#x000A;</div><div class='line' id='LC221'>&#x000A;</div><div class='line' id='LC222'>        <span class="nx">views</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="nx">viewLi</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC223'>      <span class="p">});</span>&#x000A;</div><div class='line' id='LC224'>      <span class="k">return</span> <span class="nx">views</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC225'>    <span class="p">}</span>&#x000A;</div><div class='line' id='LC226'>    &#x000A;</div><div class='line' id='LC227'>    <span class="c1">//主模板</span>&#x000A;</div><div class='line' id='LC228'>    <span class="p">,</span><span class="nx">TPL_MAIN</span> <span class="o">=</span> <span class="p">[</span><span class="dl">'</span><span class="s1">&lt;div class="layui-dropdown layui-border-box layui-panel layui-anim layui-anim-downbit"&gt;</span><span class="dl">'</span>&#x000A;</div><div class='line' id='LC229'>    <span class="p">,</span><span class="dl">'</span><span class="s1">&lt;/div&gt;</span><span class="dl">'</span><span class="p">].</span><span class="nx">join</span><span class="p">(</span><span class="dl">''</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC230'>    &#x000A;</div><div class='line' id='LC231'>    <span class="c1">//如果是右键事件，则每次触发事件时，将允许重新渲染</span>&#x000A;</div><div class='line' id='LC232'>    <span class="k">if</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">trigger</span> <span class="o">===</span> <span class="dl">'</span><span class="s1">contextmenu</span><span class="dl">'</span> <span class="o">||</span> <span class="nx">lay</span><span class="p">.</span><span class="nx">isTopElem</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">elem</span><span class="p">[</span><span class="mi">0</span><span class="p">]))</span> <span class="nx">rerender</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC233'>    &#x000A;</div><div class='line' id='LC234'>    <span class="c1">//判断是否已经打开了下拉菜单面板</span>&#x000A;</div><div class='line' id='LC235'>    <span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">rerender</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">elem</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="nx">MOD_INDEX</span> <span class="o">+</span><span class="dl">'</span><span class="s1">_opened</span><span class="dl">'</span><span class="p">))</span> <span class="k">return</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC236'>&#x000A;</div><div class='line' id='LC237'>    <span class="c1">//记录模板对象</span>&#x000A;</div><div class='line' id='LC238'>    <span class="nx">that</span><span class="p">.</span><span class="nx">elemView</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">TPL_MAIN</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC239'>    <span class="nx">that</span><span class="p">.</span><span class="nx">elemView</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">content</span> <span class="o">||</span> <span class="nx">getDefaultView</span><span class="p">());</span>&#x000A;</div><div class='line' id='LC240'>    &#x000A;</div><div class='line' id='LC241'>    <span class="c1">//初始化某些属性</span>&#x000A;</div><div class='line' id='LC242'>    <span class="k">if</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">className</span><span class="p">)</span> <span class="nx">that</span><span class="p">.</span><span class="nx">elemView</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">className</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC243'>    <span class="k">if</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">style</span><span class="p">)</span> <span class="nx">that</span><span class="p">.</span><span class="nx">elemView</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="dl">'</span><span class="s1">style</span><span class="dl">'</span><span class="p">,</span> <span class="nx">options</span><span class="p">.</span><span class="nx">style</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC244'>    &#x000A;</div><div class='line' id='LC245'>    &#x000A;</div><div class='line' id='LC246'>    <span class="c1">//记录当前执行的实例索引</span>&#x000A;</div><div class='line' id='LC247'>    <span class="nx">dropdown</span><span class="p">.</span><span class="nx">thisId</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">id</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC248'>    &#x000A;</div><div class='line' id='LC249'>    <span class="c1">//插入视图</span>&#x000A;</div><div class='line' id='LC250'>    <span class="nx">that</span><span class="p">.</span><span class="nx">remove</span><span class="p">();</span> <span class="c1">//移除非当前绑定元素的面板</span>&#x000A;</div><div class='line' id='LC251'>    <span class="nx">elemBody</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">elemView</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC252'>    <span class="nx">options</span><span class="p">.</span><span class="nx">elem</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="nx">MOD_INDEX</span> <span class="o">+</span><span class="dl">'</span><span class="s1">_opened</span><span class="dl">'</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC253'>    &#x000A;</div><div class='line' id='LC254'>    <span class="c1">//坐标定位</span>&#x000A;</div><div class='line' id='LC255'>    <span class="nx">that</span><span class="p">.</span><span class="nx">position</span><span class="p">();</span>&#x000A;</div><div class='line' id='LC256'>    <span class="nx">thisModule</span><span class="p">.</span><span class="nx">prevElem</span> <span class="o">=</span> <span class="nx">that</span><span class="p">.</span><span class="nx">elemView</span><span class="p">;</span> <span class="c1">//记录当前打开的元素，以便在下次关闭</span>&#x000A;</div><div class='line' id='LC257'>    <span class="nx">thisModule</span><span class="p">.</span><span class="nx">prevElem</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="dl">'</span><span class="s1">prevElem</span><span class="dl">'</span><span class="p">,</span> <span class="nx">options</span><span class="p">.</span><span class="nx">elem</span><span class="p">);</span> <span class="c1">//将当前绑定的元素，记录在打开元素的 data 对象中</span>&#x000A;</div><div class='line' id='LC258'>    &#x000A;</div><div class='line' id='LC259'>    <span class="c1">//阻止全局事件</span>&#x000A;</div><div class='line' id='LC260'>    <span class="nx">that</span><span class="p">.</span><span class="nx">elemView</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="dl">'</span><span class="s1">.layui-menu</span><span class="dl">'</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="nx">clickOrMousedown</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span>&#x000A;</div><div class='line' id='LC261'>      <span class="nx">layui</span><span class="p">.</span><span class="nx">stope</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC262'>    <span class="p">});</span>&#x000A;</div><div class='line' id='LC263'>&#x000A;</div><div class='line' id='LC264'>    <span class="c1">//触发菜单列表事件</span>&#x000A;</div><div class='line' id='LC265'>    <span class="nx">that</span><span class="p">.</span><span class="nx">elemView</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="dl">'</span><span class="s1">.layui-menu li</span><span class="dl">'</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="dl">'</span><span class="s1">click</span><span class="dl">'</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span>&#x000A;</div><div class='line' id='LC266'>      <span class="kd">var</span> <span class="nx">othis</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC267'>      <span class="p">,</span><span class="nx">data</span> <span class="o">=</span> <span class="nx">othis</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="dl">'</span><span class="s1">item</span><span class="dl">'</span><span class="p">)</span> <span class="o">||</span> <span class="p">{}</span>&#x000A;</div><div class='line' id='LC268'>      <span class="p">,</span><span class="nx">isChild</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">child</span> <span class="o">&amp;&amp;</span> <span class="nx">data</span><span class="p">.</span><span class="nx">child</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC269'>      &#x000A;</div><div class='line' id='LC270'>      <span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">isChild</span> <span class="o">&amp;&amp;</span> <span class="nx">data</span><span class="p">.</span><span class="nx">type</span> <span class="o">!==</span> <span class="dl">'</span><span class="s1">-</span><span class="dl">'</span><span class="p">){</span>&#x000A;</div><div class='line' id='LC271'>        <span class="nx">that</span><span class="p">.</span><span class="nx">remove</span><span class="p">();</span>&#x000A;</div><div class='line' id='LC272'>        <span class="k">typeof</span> <span class="nx">options</span><span class="p">.</span><span class="nx">click</span> <span class="o">===</span> <span class="dl">'</span><span class="s1">function</span><span class="dl">'</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">click</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">othis</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC273'>      <span class="p">}</span>&#x000A;</div><div class='line' id='LC274'>    <span class="p">});</span>&#x000A;</div><div class='line' id='LC275'>    &#x000A;</div><div class='line' id='LC276'>    <span class="c1">//触发菜单组展开收缩</span>&#x000A;</div><div class='line' id='LC277'>    <span class="nx">that</span><span class="p">.</span><span class="nx">elemView</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="nx">STR_GROUP_TITLE</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="dl">'</span><span class="s1">click</span><span class="dl">'</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span>&#x000A;</div><div class='line' id='LC278'>      <span class="kd">var</span> <span class="nx">othis</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC279'>      <span class="p">,</span><span class="nx">elemGroup</span> <span class="o">=</span> <span class="nx">othis</span><span class="p">.</span><span class="nx">parent</span><span class="p">()</span>&#x000A;</div><div class='line' id='LC280'>      <span class="p">,</span><span class="nx">data</span> <span class="o">=</span> <span class="nx">elemGroup</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="dl">'</span><span class="s1">item</span><span class="dl">'</span><span class="p">)</span> <span class="o">||</span> <span class="p">{}</span>&#x000A;</div><div class='line' id='LC281'>      &#x000A;</div><div class='line' id='LC282'>      <span class="k">if</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">type</span> <span class="o">===</span> <span class="dl">'</span><span class="s1">group</span><span class="dl">'</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">isAllowSpread</span><span class="p">){</span>&#x000A;</div><div class='line' id='LC283'>        <span class="nx">thisModule</span><span class="p">.</span><span class="nx">spread</span><span class="p">(</span><span class="nx">elemGroup</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC284'>      <span class="p">}</span>&#x000A;</div><div class='line' id='LC285'>    <span class="p">});</span>&#x000A;</div><div class='line' id='LC286'>    &#x000A;</div><div class='line' id='LC287'>    <span class="c1">//如果是鼠标移入事件，则鼠标移出时自动关闭</span>&#x000A;</div><div class='line' id='LC288'>    <span class="k">if</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">trigger</span> <span class="o">===</span> <span class="dl">'</span><span class="s1">mouseenter</span><span class="dl">'</span><span class="p">){</span>&#x000A;</div><div class='line' id='LC289'>      <span class="nx">that</span><span class="p">.</span><span class="nx">elemView</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="dl">'</span><span class="s1">mouseenter</span><span class="dl">'</span><span class="p">,</span> <span class="kd">function</span><span class="p">(){</span>&#x000A;</div><div class='line' id='LC290'>        <span class="nx">clearTimeout</span><span class="p">(</span><span class="nx">thisModule</span><span class="p">.</span><span class="nx">timer</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC291'>      <span class="p">}).</span><span class="nx">on</span><span class="p">(</span><span class="dl">'</span><span class="s1">mouseleave</span><span class="dl">'</span><span class="p">,</span> <span class="kd">function</span><span class="p">(){</span>&#x000A;</div><div class='line' id='LC292'>        <span class="nx">that</span><span class="p">.</span><span class="nx">delayRemove</span><span class="p">();</span>&#x000A;</div><div class='line' id='LC293'>      <span class="p">});</span>&#x000A;</div><div class='line' id='LC294'>    <span class="p">}</span>&#x000A;</div><div class='line' id='LC295'>&#x000A;</div><div class='line' id='LC296'>  <span class="p">};</span>&#x000A;</div><div class='line' id='LC297'>  &#x000A;</div><div class='line' id='LC298'>  <span class="c1">//位置定位</span>&#x000A;</div><div class='line' id='LC299'>  <span class="nx">Class</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">position</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">){</span>&#x000A;</div><div class='line' id='LC300'>    <span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span>&#x000A;</div><div class='line' id='LC301'>    <span class="p">,</span><span class="nx">options</span> <span class="o">=</span> <span class="nx">that</span><span class="p">.</span><span class="nx">config</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC302'>    &#x000A;</div><div class='line' id='LC303'>    <span class="nx">lay</span><span class="p">.</span><span class="nx">position</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">elem</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="nx">that</span><span class="p">.</span><span class="nx">elemView</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC304'>      <span class="na">position</span><span class="p">:</span> <span class="nx">options</span><span class="p">.</span><span class="nx">position</span>&#x000A;</div><div class='line' id='LC305'>      <span class="p">,</span><span class="na">e</span><span class="p">:</span> <span class="nx">that</span><span class="p">.</span><span class="nx">e</span>&#x000A;</div><div class='line' id='LC306'>      <span class="p">,</span><span class="na">clickType</span><span class="p">:</span> <span class="nx">options</span><span class="p">.</span><span class="nx">trigger</span> <span class="o">===</span> <span class="dl">'</span><span class="s1">contextmenu</span><span class="dl">'</span> <span class="p">?</span> <span class="dl">'</span><span class="s1">right</span><span class="dl">'</span> <span class="p">:</span> <span class="kc">null</span>&#x000A;</div><div class='line' id='LC307'>      <span class="p">,</span><span class="na">align</span><span class="p">:</span> <span class="nx">options</span><span class="p">.</span><span class="nx">align</span> <span class="o">||</span> <span class="kc">null</span>&#x000A;</div><div class='line' id='LC308'>    <span class="p">});</span>&#x000A;</div><div class='line' id='LC309'>  <span class="p">};</span>&#x000A;</div><div class='line' id='LC310'>  &#x000A;</div><div class='line' id='LC311'>  <span class="c1">//删除视图</span>&#x000A;</div><div class='line' id='LC312'>  <span class="nx">Class</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">remove</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span>&#x000A;</div><div class='line' id='LC313'>    <span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span>&#x000A;</div><div class='line' id='LC314'>    <span class="p">,</span><span class="nx">options</span> <span class="o">=</span> <span class="nx">that</span><span class="p">.</span><span class="nx">config</span>&#x000A;</div><div class='line' id='LC315'>    <span class="p">,</span><span class="nx">elemPrev</span> <span class="o">=</span> <span class="nx">thisModule</span><span class="p">.</span><span class="nx">prevElem</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC316'>    &#x000A;</div><div class='line' id='LC317'>    <span class="c1">//若存在已打开的面板元素，则移除</span>&#x000A;</div><div class='line' id='LC318'>    <span class="k">if</span><span class="p">(</span><span class="nx">elemPrev</span><span class="p">){</span>&#x000A;</div><div class='line' id='LC319'>      <span class="nx">elemPrev</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="dl">'</span><span class="s1">prevElem</span><span class="dl">'</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">(</span>&#x000A;</div><div class='line' id='LC320'>        <span class="nx">elemPrev</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="dl">'</span><span class="s1">prevElem</span><span class="dl">'</span><span class="p">).</span><span class="nx">data</span><span class="p">(</span><span class="nx">MOD_INDEX</span> <span class="o">+</span><span class="dl">'</span><span class="s1">_opened</span><span class="dl">'</span><span class="p">,</span> <span class="kc">false</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC321'>      <span class="p">);</span>&#x000A;</div><div class='line' id='LC322'>      <span class="nx">elemPrev</span><span class="p">.</span><span class="nx">remove</span><span class="p">();</span>&#x000A;</div><div class='line' id='LC323'>    <span class="p">}</span>&#x000A;</div><div class='line' id='LC324'>  <span class="p">};</span>&#x000A;</div><div class='line' id='LC325'>  &#x000A;</div><div class='line' id='LC326'>  <span class="c1">//延迟删除视图</span>&#x000A;</div><div class='line' id='LC327'>  <span class="nx">Class</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">delayRemove</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span>&#x000A;</div><div class='line' id='LC328'>    <span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span>&#x000A;</div><div class='line' id='LC329'>    <span class="p">,</span><span class="nx">options</span> <span class="o">=</span> <span class="nx">that</span><span class="p">.</span><span class="nx">config</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC330'>    <span class="nx">clearTimeout</span><span class="p">(</span><span class="nx">thisModule</span><span class="p">.</span><span class="nx">timer</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC331'>&#x000A;</div><div class='line' id='LC332'>    <span class="nx">thisModule</span><span class="p">.</span><span class="nx">timer</span> <span class="o">=</span> <span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span>&#x000A;</div><div class='line' id='LC333'>      <span class="nx">that</span><span class="p">.</span><span class="nx">remove</span><span class="p">();</span>&#x000A;</div><div class='line' id='LC334'>    <span class="p">},</span> <span class="nx">options</span><span class="p">.</span><span class="nx">delay</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC335'>  <span class="p">};</span>&#x000A;</div><div class='line' id='LC336'>  &#x000A;</div><div class='line' id='LC337'>  <span class="c1">//事件</span>&#x000A;</div><div class='line' id='LC338'>  <span class="nx">Class</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">events</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span>&#x000A;</div><div class='line' id='LC339'>    <span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span>&#x000A;</div><div class='line' id='LC340'>    <span class="p">,</span><span class="nx">options</span> <span class="o">=</span> <span class="nx">that</span><span class="p">.</span><span class="nx">config</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC341'>    &#x000A;</div><div class='line' id='LC342'>    <span class="c1">//如果传入 hover，则解析为 mouseenter</span>&#x000A;</div><div class='line' id='LC343'>    <span class="k">if</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">trigger</span> <span class="o">===</span> <span class="dl">'</span><span class="s1">hover</span><span class="dl">'</span><span class="p">)</span> <span class="nx">options</span><span class="p">.</span><span class="nx">trigger</span> <span class="o">=</span> <span class="dl">'</span><span class="s1">mouseenter</span><span class="dl">'</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC344'>&#x000A;</div><div class='line' id='LC345'>    <span class="c1">//解除上一个事件</span>&#x000A;</div><div class='line' id='LC346'>    <span class="k">if</span><span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">prevElem</span><span class="p">)</span> <span class="nx">that</span><span class="p">.</span><span class="nx">prevElem</span><span class="p">.</span><span class="nx">off</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">trigger</span><span class="p">,</span> <span class="nx">that</span><span class="p">.</span><span class="nx">prevElemCallback</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC347'>    &#x000A;</div><div class='line' id='LC348'>    <span class="c1">//记录被绑定的元素及回调</span>&#x000A;</div><div class='line' id='LC349'>    <span class="nx">that</span><span class="p">.</span><span class="nx">prevElem</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">elem</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC350'>    <span class="nx">that</span><span class="p">.</span><span class="nx">prevElemCallback</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span>&#x000A;</div><div class='line' id='LC351'>      <span class="nx">clearTimeout</span><span class="p">(</span><span class="nx">thisModule</span><span class="p">.</span><span class="nx">timer</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC352'>      <span class="nx">that</span><span class="p">.</span><span class="nx">e</span> <span class="o">=</span> <span class="nx">e</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC353'>      <span class="nx">that</span><span class="p">.</span><span class="nx">render</span><span class="p">();</span>&#x000A;</div><div class='line' id='LC354'>      <span class="nx">e</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span>&#x000A;</div><div class='line' id='LC355'>      &#x000A;</div><div class='line' id='LC356'>      <span class="c1">//组件打开完毕的时间</span>&#x000A;</div><div class='line' id='LC357'>      <span class="k">typeof</span> <span class="nx">options</span><span class="p">.</span><span class="nx">ready</span> <span class="o">===</span> <span class="dl">'</span><span class="s1">function</span><span class="dl">'</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">ready</span><span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">elemView</span><span class="p">,</span> <span class="nx">options</span><span class="p">.</span><span class="nx">elem</span><span class="p">,</span> <span class="nx">that</span><span class="p">.</span><span class="nx">e</span><span class="p">.</span><span class="nx">target</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC358'>    <span class="p">};</span>&#x000A;</div><div class='line' id='LC359'>&#x000A;</div><div class='line' id='LC360'>    <span class="c1">//触发元素事件</span>&#x000A;</div><div class='line' id='LC361'>    <span class="nx">options</span><span class="p">.</span><span class="nx">elem</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">trigger</span><span class="p">,</span> <span class="nx">that</span><span class="p">.</span><span class="nx">prevElemCallback</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC362'>    &#x000A;</div><div class='line' id='LC363'>    <span class="c1">//如果是鼠标移入事件</span>&#x000A;</div><div class='line' id='LC364'>    <span class="k">if</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">trigger</span> <span class="o">===</span> <span class="dl">'</span><span class="s1">mouseenter</span><span class="dl">'</span><span class="p">){</span>&#x000A;</div><div class='line' id='LC365'>      <span class="c1">//直行鼠标移出事件</span>&#x000A;</div><div class='line' id='LC366'>      <span class="nx">options</span><span class="p">.</span><span class="nx">elem</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="dl">'</span><span class="s1">mouseleave</span><span class="dl">'</span><span class="p">,</span> <span class="kd">function</span><span class="p">(){</span>&#x000A;</div><div class='line' id='LC367'>        <span class="nx">that</span><span class="p">.</span><span class="nx">delayRemove</span><span class="p">();</span>&#x000A;</div><div class='line' id='LC368'>      <span class="p">});</span>&#x000A;</div><div class='line' id='LC369'>    <span class="p">}</span>&#x000A;</div><div class='line' id='LC370'>  <span class="p">};</span>&#x000A;</div><div class='line' id='LC371'>  &#x000A;</div><div class='line' id='LC372'>  <span class="c1">//记录所有实例</span>&#x000A;</div><div class='line' id='LC373'>  <span class="nx">thisModule</span><span class="p">.</span><span class="nx">that</span> <span class="o">=</span> <span class="p">{};</span> <span class="c1">//记录所有实例对象</span>&#x000A;</div><div class='line' id='LC374'>  &#x000A;</div><div class='line' id='LC375'>  <span class="c1">//获取当前实例对象</span>&#x000A;</div><div class='line' id='LC376'>  <span class="nx">thisModule</span><span class="p">.</span><span class="nx">getThis</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">id</span><span class="p">){</span>&#x000A;</div><div class='line' id='LC377'>    <span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="nx">thisModule</span><span class="p">.</span><span class="nx">that</span><span class="p">[</span><span class="nx">id</span><span class="p">];</span>&#x000A;</div><div class='line' id='LC378'>    <span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">that</span><span class="p">)</span> <span class="nx">hint</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="nx">id</span> <span class="p">?</span> <span class="p">(</span><span class="nx">MOD_NAME</span> <span class="o">+</span><span class="dl">'</span><span class="s1"> instance with ID </span><span class="se">\'</span><span class="dl">'</span><span class="o">+</span> <span class="nx">id</span> <span class="o">+</span><span class="dl">'</span><span class="se">\'</span><span class="s1"> not found</span><span class="dl">'</span><span class="p">)</span> <span class="p">:</span> <span class="dl">'</span><span class="s1">ID argument required</span><span class="dl">'</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC379'>    <span class="k">return</span> <span class="nx">that</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC380'>  <span class="p">};</span>&#x000A;</div><div class='line' id='LC381'>  &#x000A;</div><div class='line' id='LC382'>  <span class="c1">//设置菜单组展开和收缩状态</span>&#x000A;</div><div class='line' id='LC383'>  <span class="nx">thisModule</span><span class="p">.</span><span class="nx">spread</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">othis</span><span class="p">){</span>&#x000A;</div><div class='line' id='LC384'>    <span class="c1">//菜单组展开和收缩</span>&#x000A;</div><div class='line' id='LC385'>    <span class="kd">var</span> <span class="nx">elemIcon</span> <span class="o">=</span> <span class="nx">othis</span><span class="p">.</span><span class="nx">children</span><span class="p">(</span><span class="dl">'</span><span class="s1">.</span><span class="dl">'</span><span class="o">+</span> <span class="nx">STR_MENU_TITLE</span><span class="p">).</span><span class="nx">find</span><span class="p">(</span><span class="dl">'</span><span class="s1">.layui-icon</span><span class="dl">'</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC386'>    <span class="k">if</span><span class="p">(</span><span class="nx">othis</span><span class="p">.</span><span class="nx">hasClass</span><span class="p">(</span><span class="nx">STR_ITEM_UP</span><span class="p">)){</span>&#x000A;</div><div class='line' id='LC387'>      <span class="nx">othis</span><span class="p">.</span><span class="nx">removeClass</span><span class="p">(</span><span class="nx">STR_ITEM_UP</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">STR_ITEM_DOWN</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC388'>      <span class="nx">elemIcon</span><span class="p">.</span><span class="nx">removeClass</span><span class="p">(</span><span class="dl">'</span><span class="s1">layui-icon-down</span><span class="dl">'</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="dl">'</span><span class="s1">layui-icon-up</span><span class="dl">'</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC389'>    <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC390'>      <span class="nx">othis</span><span class="p">.</span><span class="nx">removeClass</span><span class="p">(</span><span class="nx">STR_ITEM_DOWN</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">STR_ITEM_UP</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC391'>      <span class="nx">elemIcon</span><span class="p">.</span><span class="nx">removeClass</span><span class="p">(</span><span class="dl">'</span><span class="s1">layui-icon-up</span><span class="dl">'</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="dl">'</span><span class="s1">layui-icon-down</span><span class="dl">'</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC392'>    <span class="p">}</span>&#x000A;</div><div class='line' id='LC393'>  <span class="p">};</span>&#x000A;</div><div class='line' id='LC394'>  &#x000A;</div><div class='line' id='LC395'>  <span class="c1">//全局事件</span>&#x000A;</div><div class='line' id='LC396'>  <span class="p">;</span><span class="o">!</span><span class="kd">function</span><span class="p">(){</span>&#x000A;</div><div class='line' id='LC397'>    <span class="kd">var</span> <span class="nx">_WIN</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nb">window</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC398'>    <span class="p">,</span><span class="nx">_DOC</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC399'>    &#x000A;</div><div class='line' id='LC400'>    <span class="c1">//自适应定位</span>&#x000A;</div><div class='line' id='LC401'>    <span class="nx">_WIN</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="dl">'</span><span class="s1">resize</span><span class="dl">'</span><span class="p">,</span> <span class="kd">function</span><span class="p">(){</span>&#x000A;</div><div class='line' id='LC402'>      <span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">dropdown</span><span class="p">.</span><span class="nx">thisId</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC403'>      <span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="nx">thisModule</span><span class="p">.</span><span class="nx">getThis</span><span class="p">(</span><span class="nx">dropdown</span><span class="p">.</span><span class="nx">thisId</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC404'>      <span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">that</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC405'>      &#x000A;</div><div class='line' id='LC406'>      <span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">that</span><span class="p">.</span><span class="nx">elemView</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">||</span> <span class="o">!</span><span class="nx">$</span><span class="p">(</span><span class="dl">'</span><span class="s1">.</span><span class="dl">'</span><span class="o">+</span> <span class="nx">STR_ELEM</span><span class="p">)[</span><span class="mi">0</span><span class="p">]){</span>&#x000A;</div><div class='line' id='LC407'>        <span class="k">return</span> <span class="kc">false</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC408'>      <span class="p">}</span>&#x000A;</div><div class='line' id='LC409'>      &#x000A;</div><div class='line' id='LC410'>      <span class="kd">var</span> <span class="nx">options</span> <span class="o">=</span> <span class="nx">that</span><span class="p">.</span><span class="nx">config</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC411'>      &#x000A;</div><div class='line' id='LC412'>      <span class="k">if</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">trigger</span> <span class="o">===</span> <span class="dl">'</span><span class="s1">contextmenu</span><span class="dl">'</span><span class="p">){</span>&#x000A;</div><div class='line' id='LC413'>        <span class="nx">that</span><span class="p">.</span><span class="nx">remove</span><span class="p">();</span>&#x000A;</div><div class='line' id='LC414'>      <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC415'>        <span class="nx">that</span><span class="p">.</span><span class="nx">position</span><span class="p">();</span>&#x000A;</div><div class='line' id='LC416'>      <span class="p">}</span>&#x000A;</div><div class='line' id='LC417'>    <span class="p">});</span>&#x000A;</div><div class='line' id='LC418'>    &#x000A;</div><div class='line' id='LC419'>    &#x000A;</div><div class='line' id='LC420'>      &#x000A;</div><div class='line' id='LC421'>    <span class="c1">//点击任意处关闭</span>&#x000A;</div><div class='line' id='LC422'>    <span class="nx">_DOC</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="nx">clickOrMousedown</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span>&#x000A;</div><div class='line' id='LC423'>      <span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">dropdown</span><span class="p">.</span><span class="nx">thisId</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC424'>      <span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="nx">thisModule</span><span class="p">.</span><span class="nx">getThis</span><span class="p">(</span><span class="nx">dropdown</span><span class="p">.</span><span class="nx">thisId</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC425'>      <span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">that</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC426'>      &#x000A;</div><div class='line' id='LC427'>      <span class="kd">var</span> <span class="nx">options</span> <span class="o">=</span> <span class="nx">that</span><span class="p">.</span><span class="nx">config</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC428'>      &#x000A;</div><div class='line' id='LC429'>      <span class="c1">//如果触发的是绑定的元素，或者属于绑定元素的子元素，则不关闭</span>&#x000A;</div><div class='line' id='LC430'>      <span class="c1">//满足条件：当前绑定的元素不是 body document，或者不是鼠标右键事件</span>&#x000A;</div><div class='line' id='LC431'>      <span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">lay</span><span class="p">.</span><span class="nx">isTopElem</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">elem</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="o">||</span> <span class="nx">options</span><span class="p">.</span><span class="nx">trigger</span> <span class="o">===</span> <span class="dl">'</span><span class="s1">contextmenu</span><span class="dl">'</span><span class="p">)){</span>&#x000A;</div><div class='line' id='LC432'>        <span class="k">if</span><span class="p">(</span>&#x000A;</div><div class='line' id='LC433'>          <span class="nx">e</span><span class="p">.</span><span class="nx">target</span> <span class="o">===</span> <span class="nx">options</span><span class="p">.</span><span class="nx">elem</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">||</span> &#x000A;</div><div class='line' id='LC434'>          <span class="nx">options</span><span class="p">.</span><span class="nx">elem</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">target</span><span class="p">)[</span><span class="mi">0</span><span class="p">]</span> <span class="o">||</span>&#x000A;</div><div class='line' id='LC435'>          <span class="nx">e</span><span class="p">.</span><span class="nx">target</span> <span class="o">===</span> <span class="nx">that</span><span class="p">.</span><span class="nx">elemView</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">||</span>&#x000A;</div><div class='line' id='LC436'>          <span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">elemView</span> <span class="o">&amp;&amp;</span> <span class="nx">that</span><span class="p">.</span><span class="nx">elemView</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">target</span><span class="p">)[</span><span class="mi">0</span><span class="p">])</span>&#x000A;</div><div class='line' id='LC437'>        <span class="p">)</span> <span class="k">return</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC438'>      <span class="p">}</span>&#x000A;</div><div class='line' id='LC439'>      &#x000A;</div><div class='line' id='LC440'>      <span class="nx">that</span><span class="p">.</span><span class="nx">remove</span><span class="p">();</span>&#x000A;</div><div class='line' id='LC441'>    <span class="p">});</span>&#x000A;</div><div class='line' id='LC442'>    &#x000A;</div><div class='line' id='LC443'>    <span class="c1">//基础菜单的静态元素事件</span>&#x000A;</div><div class='line' id='LC444'>    <span class="kd">var</span> <span class="nx">ELEM_LI</span> <span class="o">=</span> <span class="dl">'</span><span class="s1">.layui-menu:not(.layui-dropdown-menu) li</span><span class="dl">'</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC445'>    <span class="nx">_DOC</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="dl">'</span><span class="s1">click</span><span class="dl">'</span><span class="p">,</span> <span class="nx">ELEM_LI</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span>&#x000A;</div><div class='line' id='LC446'>      <span class="kd">var</span> <span class="nx">othis</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC447'>      <span class="p">,</span><span class="nx">parent</span> <span class="o">=</span> <span class="nx">othis</span><span class="p">.</span><span class="nx">parents</span><span class="p">(</span><span class="dl">'</span><span class="s1">.layui-menu</span><span class="dl">'</span><span class="p">).</span><span class="nx">eq</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC448'>      <span class="p">,</span><span class="nx">isChild</span> <span class="o">=</span> <span class="nx">othis</span><span class="p">.</span><span class="nx">hasClass</span><span class="p">(</span><span class="nx">STR_ITEM_GROUP</span><span class="p">)</span> <span class="o">||</span> <span class="nx">othis</span><span class="p">.</span><span class="nx">hasClass</span><span class="p">(</span><span class="nx">STR_ITEM_PARENT</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC449'>      <span class="p">,</span><span class="nx">filter</span> <span class="o">=</span> <span class="nx">parent</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="dl">'</span><span class="s1">lay-filter</span><span class="dl">'</span><span class="p">)</span> <span class="o">||</span> <span class="nx">parent</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="dl">'</span><span class="s1">id</span><span class="dl">'</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC450'>      <span class="p">,</span><span class="nx">options</span> <span class="o">=</span> <span class="nx">lay</span><span class="p">.</span><span class="nx">options</span><span class="p">(</span><span class="k">this</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC451'>      &#x000A;</div><div class='line' id='LC452'>      <span class="c1">//非触发元素</span>&#x000A;</div><div class='line' id='LC453'>      <span class="k">if</span><span class="p">(</span><span class="nx">othis</span><span class="p">.</span><span class="nx">hasClass</span><span class="p">(</span><span class="nx">STR_ITEM_DIV</span><span class="p">))</span> <span class="k">return</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC454'>&#x000A;</div><div class='line' id='LC455'>      <span class="c1">//非菜单组</span>&#x000A;</div><div class='line' id='LC456'>      <span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">isChild</span><span class="p">){</span>&#x000A;</div><div class='line' id='LC457'>        <span class="c1">//选中</span>&#x000A;</div><div class='line' id='LC458'>        <span class="nx">parent</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="dl">'</span><span class="s1">.</span><span class="dl">'</span><span class="o">+</span> <span class="nx">STR_ITEM_CHECKED</span><span class="p">).</span><span class="nx">removeClass</span><span class="p">(</span><span class="nx">STR_ITEM_CHECKED</span><span class="p">);</span> <span class="c1">//清除选中样式</span>&#x000A;</div><div class='line' id='LC459'>        <span class="nx">parent</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="dl">'</span><span class="s1">.</span><span class="dl">'</span><span class="o">+</span> <span class="nx">STR_ITEM_CHECKED2</span><span class="p">).</span><span class="nx">removeClass</span><span class="p">(</span><span class="nx">STR_ITEM_CHECKED2</span><span class="p">);</span> <span class="c1">//清除父级菜单选中样式</span>&#x000A;</div><div class='line' id='LC460'>        <span class="nx">othis</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">STR_ITEM_CHECKED</span><span class="p">);</span> <span class="c1">//添加选中样式</span>&#x000A;</div><div class='line' id='LC461'>        <span class="nx">othis</span><span class="p">.</span><span class="nx">parents</span><span class="p">(</span><span class="dl">'</span><span class="s1">.</span><span class="dl">'</span><span class="o">+</span> <span class="nx">STR_ITEM_PARENT</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">STR_ITEM_CHECKED2</span><span class="p">);</span> <span class="c1">//添加父级菜单选中样式</span>&#x000A;</div><div class='line' id='LC462'>        &#x000A;</div><div class='line' id='LC463'>        <span class="c1">//触发事件</span>&#x000A;</div><div class='line' id='LC464'>        <span class="nx">layui</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">MOD_NAME</span><span class="p">,</span> <span class="dl">'</span><span class="s1">click(</span><span class="dl">'</span><span class="o">+</span> <span class="nx">filter</span> <span class="o">+</span><span class="dl">'</span><span class="s1">)</span><span class="dl">'</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC465'>      <span class="p">}</span>&#x000A;</div><div class='line' id='LC466'>    <span class="p">});</span>&#x000A;</div><div class='line' id='LC467'>    &#x000A;</div><div class='line' id='LC468'>    <span class="c1">//基础菜单的展开收缩事件</span>&#x000A;</div><div class='line' id='LC469'>    <span class="nx">_DOC</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="dl">'</span><span class="s1">click</span><span class="dl">'</span><span class="p">,</span> <span class="p">(</span><span class="nx">ELEM_LI</span> <span class="o">+</span> <span class="nx">STR_GROUP_TITLE</span><span class="p">),</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span>&#x000A;</div><div class='line' id='LC470'>      <span class="kd">var</span> <span class="nx">othis</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC471'>      <span class="p">,</span><span class="nx">elemGroup</span> <span class="o">=</span> <span class="nx">othis</span><span class="p">.</span><span class="nx">parents</span><span class="p">(</span><span class="dl">'</span><span class="s1">.</span><span class="dl">'</span><span class="o">+</span> <span class="nx">STR_ITEM_GROUP</span> <span class="o">+</span><span class="dl">'</span><span class="s1">:eq(0)</span><span class="dl">'</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC472'>      <span class="p">,</span><span class="nx">options</span> <span class="o">=</span> <span class="nx">lay</span><span class="p">.</span><span class="nx">options</span><span class="p">(</span><span class="nx">elemGroup</span><span class="p">[</span><span class="mi">0</span><span class="p">]);</span>&#x000A;</div><div class='line' id='LC473'>&#x000A;</div><div class='line' id='LC474'>      <span class="k">if</span><span class="p">((</span><span class="dl">'</span><span class="s1">isAllowSpread</span><span class="dl">'</span> <span class="k">in</span> <span class="nx">options</span><span class="p">)</span> <span class="p">?</span> <span class="nx">options</span><span class="p">.</span><span class="nx">isAllowSpread</span> <span class="p">:</span> <span class="kc">true</span><span class="p">){</span>&#x000A;</div><div class='line' id='LC475'>        <span class="nx">thisModule</span><span class="p">.</span><span class="nx">spread</span><span class="p">(</span><span class="nx">elemGroup</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC476'>      <span class="p">};</span>&#x000A;</div><div class='line' id='LC477'>    <span class="p">});</span>&#x000A;</div><div class='line' id='LC478'>    &#x000A;</div><div class='line' id='LC479'>    <span class="c1">//判断子级菜单是否超出屏幕</span>&#x000A;</div><div class='line' id='LC480'>    <span class="kd">var</span> <span class="nx">ELEM_LI_PAR</span> <span class="o">=</span> <span class="dl">'</span><span class="s1">.layui-menu .</span><span class="dl">'</span><span class="o">+</span> <span class="nx">STR_ITEM_PARENT</span>&#x000A;</div><div class='line' id='LC481'>    <span class="nx">_DOC</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="dl">'</span><span class="s1">mouseenter</span><span class="dl">'</span><span class="p">,</span> <span class="nx">ELEM_LI_PAR</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span>&#x000A;</div><div class='line' id='LC482'>      <span class="kd">var</span> <span class="nx">othis</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC483'>      <span class="p">,</span><span class="nx">elemPanel</span> <span class="o">=</span> <span class="nx">othis</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="dl">'</span><span class="s1">.</span><span class="dl">'</span><span class="o">+</span> <span class="nx">STR_MENU_PANEL</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC484'>&#x000A;</div><div class='line' id='LC485'>      <span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">elemPanel</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="k">return</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC486'>      <span class="kd">var</span> <span class="nx">rect</span> <span class="o">=</span> <span class="nx">elemPanel</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">getBoundingClientRect</span><span class="p">();</span>&#x000A;</div><div class='line' id='LC487'>      &#x000A;</div><div class='line' id='LC488'>      <span class="c1">//是否超出右侧屏幕</span>&#x000A;</div><div class='line' id='LC489'>      <span class="k">if</span><span class="p">(</span><span class="nx">rect</span><span class="p">.</span><span class="nx">right</span> <span class="o">&gt;</span> <span class="nx">_WIN</span><span class="p">.</span><span class="nx">width</span><span class="p">()){</span>&#x000A;</div><div class='line' id='LC490'>        <span class="nx">elemPanel</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">STR_MENU_PANEL_L</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC491'>        <span class="c1">//不允许超出左侧屏幕</span>&#x000A;</div><div class='line' id='LC492'>        <span class="nx">rect</span> <span class="o">=</span> <span class="nx">elemPanel</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">getBoundingClientRect</span><span class="p">();</span>&#x000A;</div><div class='line' id='LC493'>        <span class="k">if</span><span class="p">(</span><span class="nx">rect</span><span class="p">.</span><span class="nx">left</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">){</span>&#x000A;</div><div class='line' id='LC494'>          <span class="nx">elemPanel</span><span class="p">.</span><span class="nx">removeClass</span><span class="p">(</span><span class="nx">STR_MENU_PANEL_L</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC495'>        <span class="p">}</span>&#x000A;</div><div class='line' id='LC496'>      <span class="p">}</span>&#x000A;</div><div class='line' id='LC497'>      &#x000A;</div><div class='line' id='LC498'>      <span class="c1">//是否超出底部屏幕</span>&#x000A;</div><div class='line' id='LC499'>      <span class="k">if</span><span class="p">(</span><span class="nx">rect</span><span class="p">.</span><span class="nx">bottom</span> <span class="o">&gt;</span> <span class="nx">_WIN</span><span class="p">.</span><span class="nx">height</span><span class="p">()){</span>&#x000A;</div><div class='line' id='LC500'>        <span class="nx">elemPanel</span><span class="p">.</span><span class="nx">eq</span><span class="p">(</span><span class="mi">0</span><span class="p">).</span><span class="nx">css</span><span class="p">(</span><span class="dl">'</span><span class="s1">margin-top</span><span class="dl">'</span><span class="p">,</span> <span class="o">-</span><span class="p">(</span><span class="nx">rect</span><span class="p">.</span><span class="nx">bottom</span> <span class="o">-</span> <span class="nx">_WIN</span><span class="p">.</span><span class="nx">height</span><span class="p">()));</span>&#x000A;</div><div class='line' id='LC501'>      <span class="p">};</span>&#x000A;</div><div class='line' id='LC502'>    <span class="p">}).</span><span class="nx">on</span><span class="p">(</span><span class="dl">'</span><span class="s1">mouseleave</span><span class="dl">'</span><span class="p">,</span> <span class="nx">ELEM_LI_PAR</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span>&#x000A;</div><div class='line' id='LC503'>      <span class="kd">var</span> <span class="nx">othis</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">)</span>&#x000A;</div><div class='line' id='LC504'>      <span class="p">,</span><span class="nx">elemPanel</span> <span class="o">=</span> <span class="nx">othis</span><span class="p">.</span><span class="nx">children</span><span class="p">(</span><span class="dl">'</span><span class="s1">.</span><span class="dl">'</span><span class="o">+</span> <span class="nx">STR_MENU_PANEL</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC505'>      &#x000A;</div><div class='line' id='LC506'>      <span class="nx">elemPanel</span><span class="p">.</span><span class="nx">removeClass</span><span class="p">(</span><span class="nx">STR_MENU_PANEL_L</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC507'>      <span class="nx">elemPanel</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="dl">'</span><span class="s1">margin-top</span><span class="dl">'</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC508'>    <span class="p">});</span>&#x000A;</div><div class='line' id='LC509'>    &#x000A;</div><div class='line' id='LC510'>  <span class="p">}();</span>&#x000A;</div><div class='line' id='LC511'>  &#x000A;</div><div class='line' id='LC512'>  <span class="c1">//重载实例</span>&#x000A;</div><div class='line' id='LC513'>  <span class="nx">dropdown</span><span class="p">.</span><span class="nx">reload</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">id</span><span class="p">,</span> <span class="nx">options</span><span class="p">){</span>&#x000A;</div><div class='line' id='LC514'>    <span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="nx">thisModule</span><span class="p">.</span><span class="nx">getThis</span><span class="p">(</span><span class="nx">id</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC515'>    <span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">that</span><span class="p">)</span> <span class="k">return</span> <span class="k">this</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC516'>&#x000A;</div><div class='line' id='LC517'>    <span class="nx">that</span><span class="p">.</span><span class="nx">reload</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC518'>    <span class="k">return</span> <span class="nx">thisModule</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">that</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC519'>  <span class="p">};</span>&#x000A;</div><div class='line' id='LC520'>&#x000A;</div><div class='line' id='LC521'>  <span class="c1">//核心入口</span>&#x000A;</div><div class='line' id='LC522'>  <span class="nx">dropdown</span><span class="p">.</span><span class="nx">render</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">){</span>&#x000A;</div><div class='line' id='LC523'>    <span class="kd">var</span> <span class="nx">inst</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Class</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC524'>    <span class="k">return</span> <span class="nx">thisModule</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">inst</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC525'>  <span class="p">};</span>&#x000A;</div><div class='line' id='LC526'>&#x000A;</div><div class='line' id='LC527'>  <span class="nx">exports</span><span class="p">(</span><span class="nx">MOD_NAME</span><span class="p">,</span> <span class="nx">dropdown</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC528'><span class="p">});</span>&#x000A;</div></pre><div class="markdown-code-block-copy-btn"></div></div></div>
</div>
<script>
  window.Gitee.initReadmeCatalog();
  toMathMlCode('','markdown-body');
  $('.file_content a, .catalog-li a.anchor').click(function () {
    var anchor = $(this).attr('href')
    window.location.hash = anchor
  })
</script>

</div>
</div>
<div class='tree_progress'></div>
<div class='ui small modal' id='modal-linejump'>
<div class='ui custom form content'>
<div class='field'>
<div class='ui right action input'>
<input placeholder='跳转至某一行...' type='number'>
<div class='ui orange button'>
跳转
</div>
</div>
</div>
</div>
</div>


<div class='complaint'>
<div class='ui modal small form' id='landing-comments-complaint-modal'>
<i class='iconfont icon-close close'></i>
<div class='header'>
举报
</div>
<div class='content'>
<div class='appeal-success-tip hide'>
<i class='iconfont icon-ic_msg_success'></i>
<div class='appeal-success-text'>
举报成功
</div>
<span>
我们将于2个工作日内通过站内信反馈结果给你！
</span>
</div>
<div class='appeal-tip'>
请认真填写举报原因，尽可能描述详细。
</div>
<div class='ui form appeal-form'>
<div class='inline field'>
<label class='left-part appeal-type-wrap'>
举报类型
</label>
<div class='ui dropdown selection' id='appeal-comments-types'>
<div class='text default'>
请选择举报类型
</div>
<i class='dropdown icon'></i>
<div class='menu'></div>
</div>
</div>
<div class='inline field'>
<label class='left-part'>
举报原因
</label>
<textarea class='appeal-reason' id='appeal-comment-reason' name='msg' placeholder='请说明举报原因' rows='3'></textarea>
</div>
<div class='ui message callback-msg hide'></div>
<div class='ui small error text message exceeded-size-tip'></div>
</div>
</div>
<div class='actions'>
<div class='ui button blank cancel'>
取消
</div>
<div class='ui orange icon button disabled ok' id='complaint-comment-confirm'>
发送
</div>
</div>
</div>
<script>
  var $complaintCommentsModal = $('#landing-comments-complaint-modal'),
      $complainCommentType = $complaintCommentsModal.find('#appeal-comments-types'),
      $complaintModalTip = $complaintCommentsModal.find('.callback-msg'),
      $complaintCommentsContent = $complaintCommentsModal.find('.appeal-reason'),
      $complaintCommentBtn = $complaintCommentsModal.find('#complaint-comment-confirm'),
      complaintSending = false,
      initedCommentsType = false;
  
  function initCommentsTypeList() {
    if (!initedCommentsType) {
      $.ajax({
        url: "/appeals/fetch_types",
        method: 'get',
        data: {'type': 'comment'},
        success: function (data) {
          var result = '';
          for (var i = 0; i < data.length; i++) {
            result = result + "<div class='item' data-value='" + data[i].id + "'>" + data[i].name + "</div>";
          }
          $complainCommentType.find('.menu').html(result);
        }
      });
      $complainCommentType.dropdown({showOnFocus: false});
      initedCommentsType = true;
    }
  }
  $complainCommentType.on('click', function() {
    $complaintCommentsModal.modal({
      autofocus: false,
      onApprove: function() {
        return false;
      },
      onHidden: function() {
        restoreCommonentDefault();
      }
    }).modal('show');
  });
  
  $complaintCommentsContent.on('change keyup', function(e) {
    var content = $(this).val();
    if ($.trim(content).length > 0 && $complainCommentType.dropdown('get value').length > 0 ) {
      $complaintCommentBtn.removeClass('disabled');
      return;
    }
    $complaintCommentBtn.addClass('disabled');
  });
  
  
  $complainCommentType.dropdown({
    showOnFocus: false,
    onChange: function(value, text, $selectedItem) {
      if (value.length > 0 && $.trim($complaintCommentsContent.val()).length > 0) {
        $complaintCommentBtn.removeClass('disabled');
        return
      }
      $complaintCommentBtn.addClass('disabled');
    }
  });
  
  function restoreCommonentDefault() {
    $complainCommentType.dropdown('restore defaults');
    $complaintCommentsContent.val('');
    $('.exceeded-size-tip').text('').hide();
    $complaintModalTip.text('').hide();
    setTimeout(function() {
      setCommentSendTip(false);
    }, 1500);
  }
  
  $complaintCommentBtn.on('click',function(e){
    var reason = $complaintCommentsContent.val();
    var appealableId = $('#landing-comments-complaint-modal').attr('data-id');
    if (complaintSending) {
      return;
    }
    var appealType = $complainCommentType.dropdown('get value');
    var formData = new FormData();
    formData.append('appeal_type_id', appealType);
    formData.append('reason', reason);
    formData.append('appeal_type','Note');
    formData.append('target_id',appealableId);
    $.ajax({
      type: 'POST',
      url: "/appeals",
      cache: false,
      contentType: false,
      processData: false,
      data: formData,
      beforeSend: function() {
        setCommentSendStatus(true);
      },
      success: function(res) {
        if (res.status == 200) {
          setCommentSendTip(true);
          setTimeout(function() {
            $complaintCommentsModal.modal('hide');
            restoreCommonentDefault();
          }, 3000);
        }
        setCommentSendStatus(false);
      },
      error: function(err) {
        showCommonTips(err.responseJSON.message, 'error');
        setCommentSendStatus(false);
      }
    })
  });
  
  function showCommonTips(text, type) {
    $complaintModalTip.text(text).show();
    if (type == 'error') {
      $complaintModalTip.removeClass('success').addClass('error');
    } else {
      $complaintModalTip.removeClass('error').addClass('success');
    }
  }
  
  function setCommentSendStatus(value) {
    complaintSending = value;
    if (complaintSending) {
      $complaintCommentBtn.addClass('loading');
      $complaintCommentsContent.attr('readonly', true);
      $complainCommentType.attr('readonly', true);
    } else {
      $complaintCommentBtn.removeClass('loading');
      $complaintCommentsContent.attr('readonly', false);
      $complainCommentType.attr('readonly', false);
    }
  }
  
  function setCommentSendTip(value) {
    if (value) {
      $('.appeal-success-tip').removeClass('hide');
      $('.appeal-tip').addClass('hide');
      $('.appeal-form').addClass('hide');
      $('#landing-comments-complaint-modal .actions').addClass('hide');
    } else {
      $('.appeal-success-tip').addClass('hide');
      $('.appeal-tip').removeClass('hide');
      $('.appeal-form').removeClass('hide');
      $('#landing-comments-complaint-modal .actions').removeClass('hide');
    }
  }
</script>

</div>
<script>
  "use strict";
  $('.js-check-star').checkbox('set unchecked')
</script>

</div>
</div>
</div>
<div class='four wide column' style='display: none;'>
<div class='project__right-side'>
<div class='side-item intro'>
<div class='header'>
<h4>简介</h4>
</div>
<div class='content'>
<span class='git-project-desc-text'>一套开源的 Web UI 解决方案。采用自身经典的模块化规范，并遵循原生 HTML/CSS/JS 的开发方式，极易上手，拿来即用。其风格简约轻盈，而组件优雅丰盈，从核心代码到使用方法的每一处细节都经过精心雕琢，非常适合网页界面的快速开发。</span>
<a class='hide spread' href='javascript:void(0);'>
展开
<i class='caret down icon'></i>
</a>
<a class='retract hide' href='javascript:void(0);'>
收起
<i class='caret up icon'></i>
</a>
<div class='intro-list'>
<div class='blank d-flex d-flex-between dropdown item js-project-label_show label-list-line-feed project-label-list ui' data-labels='[]' data-url='/sentsin/layui/update_description'>
<div class='mixed-label'>
</div>

<div class='default'>暂无标签</div>
</div>
<div class='item'>
<i class='iconfont icon-link'></i>
<span class='git-project-homepage'>
<a rel="nofollow" id="homepage" target="_blank" href="https://gitee.com/layui">https://gitee.com/layui</a>
</span>
</div>
<div class='item'>
<i class='iconfont icon-tag-program'></i>
<span class='summary-languages'>
JavaScript
<span class='text-muted'>
等 2 种语言
<i class='icon dropdown'></i>
</span>
</span>
<div class='ui popup summary-languages-popup'>
<div class='row'>
<div class='lang'>
<a href="/explore/all?lang=JavaScript">JavaScript</a>
</div>
<div class='lang-bar'>
<div class='bar' style='width: 78.4%;'></div>
</div>
<a class="percentage" href="/explore/all?lang=JavaScript">78.4%</a>
</div>
<div class='row'>
<div class='lang'>
<a href="/explore/all?lang=CSS">CSS</a>
</div>
<div class='lang-bar'>
<div class='bar' style='width: 21.6%;'></div>
</div>
<a class="percentage" href="/explore/all?lang=CSS">21.6%</a>
</div>
</div>
</div>

<div class='item'>
<i class='iconfont icon-licence'></i>
<a target="_blank" id="license-popup" href="/sentsin/layui/blob/master/LICENSE">MIT</a>
<div class='ui popup dark'>使用 MIT 开源许可协议</div>
</div>
<div class='item'>
<i class='iconfont icon-giteepage'></i>
Pages：
<a target="_blank" href="https://sentsin.gitee.io/layui">https://sentsin.gitee.io/layui</a>
</div>
</div>
</div>
<div class='content intro-form'>
<div class='ui small input'>
<textarea name='project[description]' placeholder='描述' rows='5'></textarea>
</div>
<div class='ui small input'>
<input data-regex-value='(^$)|(^(http|https):\/\/(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).*)|(^(http|https):\/\/[a-zA-Z0-9]+([_\-\.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,10}(:[0-9]{1,10})?(\?.*)?(\/.*)?$)' name='project[homepage]' placeholder='主页(eg: https://gitee.com)' type='text'>
</div>
<button class='ui orange button mt-1 btn-save'>
保存更改
</button>
<div class='ui blank button btn-cancel-edit'>
取消
</div>
</div>
</div>
<div class='side-item release'>
<div class='header'>
<h4>
发行版
<span class='text-muted'>
(8)
</span>
</h4>
<a class="ui link button pull-right" href="/sentsin/layui/releases">全部</a>
</div>
<div class='content ml-3'>
<i class='iconfont icon-release'></i>
<div class='desc'>
<a href="/sentsin/layui/releases/v2.6.8">2.6.8</a>
</div>
<span class='timeago' datetime='2021-05-31 18:01' title='2021-05-31 18:01:58 +0800'></span>
</div>
</div>
<div class='side-item radar'>
<div class='header mb-1'>
<h4 class='limit-length'>layui</h4>
<a class="ui link button radar-qa" href="javascript:void(0);"><i class='iconfont icon-help-circle'></i>
</a></div>
<div class='content'>
<div data-url='/sentsin/layui/project_radars' id='metrics-radar'>
<div class='wrap skeleton'>
<div class='total-score hide'>
<div class='text'></div>
<div class='score'></div>
</div>
</div>
<div class='ui popup radar-popup'>
<h4 class='title'>Gitee 指数包含如下维度</h4>
<div class='project-radar-list'>
<div class='descript-contianer'>
<div class='descript-title'>
<p>代码活跃度</p>
<p>社区活跃度</p>
<p>团队健康</p>
<p>流行趋势</p>
<p>影响力</p>
</div>
<div class='descript'>
<p>：与代码提交频次相关</p>
<p>：与项目和用户的issue、pr互动相关</p>
<p>：与团队成员人数和稳定度相关</p>
<p>：与项目近期受关注度相关</p>
<p>：与项目的star、下载量等社交指标相关</p>
</div>
</div>
</div>
<div class='finaltime'></div>
</div>
</div>
<script src="https://assets.gitee.com/assets/skill_radar/rep_app-bfe82d2bc79d00c15f1a571f5370c79b.js"></script>

</div>
</div>
<div class='side-item contrib' data-url='/sentsin/layui/contributors_count?ref=master' id='contributor'>
<div class='header'>
<h4>
贡献者
<span class='text-muted' id='contributor-count'></span>
</h4>
<a class="ui link button pull-right" href="/sentsin/layui/contributors?ref=master">全部</a>
</div>
<div class='content' id='contributor-list'></div>
<div class='ui active centered inline loader' id='contributor-loader'></div>
</div>
<div class='side-item events' data-url='/sentsin/layui/events.json' id='proj-events'>
<div class='header'>
<h4>近期动态</h4>
</div>
<div class='content'>
<div class='ui comments' id='event-list'></div>
<a class="loadmore hide" href="javascript:void(0);">加载更多
<i class='icon dropdown'></i>
</a><center>
<div class='text-muted nomore hide'>不能加载更多了</div>
<div class='ui inline loader active'></div>
</center>
</div>
</div>
</div>
<div class='ui modal tiny' id='edit-project-description'>
<i class='iconfont icon-close close'></i>
<div class='header'>编辑仓库简介</div>
<div class='content'>
<div class='item mb-2'>
<div class='title label'>简介内容</div>
<div class='ui small input'>
<textarea maxlength='200' name='project[description]' placeholder='描述' rows='5'>一套开源的 Web UI 解决方案。采用自身经典的模块化规范，并遵循原生 HTML/CSS/JS 的开发方式，极易上手，拿来即用。其风格简约轻盈，而组件优雅丰盈，从核心代码到使用方法的每一处细节都经过精心雕琢，非常适合网页界面的快速开发。</textarea>
</div>
</div>
<div class='item mb-2'>
<div class='title label'>主页</div>
<div class='ui small input'>
<input data-regex-value='(^$)|(^(http|https):\/\/(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).*)|(^(http|https):\/\/[a-zA-Z0-9]+([_\-\.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,10}(:[0-9]{1,10})?(\?.*)?(\/.*)?$)' name='project[homepage]' placeholder='主页(eg: https://gitee.com)' type='text' value='https://gitee.com/layui'>
</div>
</div>
</div>
<div class='actions'>
<button class='ui button blank cancel'>取消</button>
<button class='ui button orange btn-save'>保存更改</button>
</div>
</div>

<script>
  window.gon.projectRightSide = {
    homepage: "https://gitee.com/layui",
    description: "一套开源的 Web UI 解决方案。采用自身经典的模块化规范，并遵循原生 HTML/CSS/JS 的开发方式，极易上手，拿来即用。其风格简约轻盈，而组件优雅丰盈，从核心代码到使用方法的每一处细节都经过精心雕琢，非常适合网页界面的快速开发。",
    url: '/sentsin/layui/update_description',
    i18n: {
      invalidHomepage: '不是有效的 http 地址',
      descriptionLimitExceeded: '简介长度不得超过%{limit}个字符',
      noDescription: '暂无描述',
      noPermission: '无权限操作！',
      requestError: '修改发生错误，请稍后重试！'
    }
  }
  window.gon.cloneArrSelectedLabel = [] || []
  $(function () {
    var $editModal = $('#edit-project-description')
    $editModal.modal({
      onShow: function () {
        window.globalUtils.getFocus($editModal.find('textarea'))
      }
    })
    $('.project__right-side').on('click', '.header .btn-edit', function () {
      $editModal.modal('show')
    })
    $('#license-popup').popup({ position: 'bottom center', lastResort: 'bottom center' })
  
    $('.js-project-label_show').projectLabel({
      i18n: {
        empty: "标签名不能为空",
        verify: "标签名只允许包含中文、字母、数字或者中划线(-)，不能以中划线开头，且长度少于35个字符",
        max: "最多选择 5 个标签"
      }
    })
  })
</script>

</div>
</div>
</div>
<script>
  (function() {
    $(function() {
      Tree.init();
      return TreeCommentActions.init();
    });
  
  }).call(this);
</script>
<script src="https://assets.gitee.com/webpacks/gitee-linker.b5c93d77567006097fca.js"></script>

</div>
<script>
  (function() {
    var donateModal;
  
    Gitee.modalHelper = new GiteeModalHelper({
      alertText: '提示',
      okText: '确定'
    });
  
    donateModal = new ProjectDonateModal({
      el: '#project-donate-modal',
      alipayUrl: '/sentsin/layui/alipay',
      wepayUrl: '/sentsin/layui/wepay',
      nameIsBlank: '名称不能为空',
      nameTooLong: '名称过长（最多为 36 个字符）',
      modalHelper: Gitee.modalHelper
    });
  
    if (null === 'true') {
      donateModal.show();
    }
  
    $('#project-donate').on('click', function() {
      return donateModal.show();
    });
  
  }).call(this);
</script>
<script>
  Tree.initHighlightTheme('white')
</script>


</div>
<div class='gitee-project-extension'>
<div class='extension lang'>JavaScript</div>
<div class='extension public'>1</div>
<div class='extension https'>https://gitee.com/sentsin/layui.git</div>
<div class='extension ssh'>git@gitee.com:sentsin/layui.git</div>
<div class='extension namespace'>sentsin</div>
<div class='extension repo'>layui</div>
<div class='extension name'>layui</div>
<div class='extension branch'>master</div>
</div>

<script>
  $(function() {
    GitLab.GfmAutoComplete.dataSource = "/sentsin/layui/autocomplete_sources"
    GitLab.GfmAutoComplete.Emoji.assetBase = '/assets/emoji'
    GitLab.GfmAutoComplete.setup();
  });
</script>

<footer id='git-footer-main'>
<div class='ui container'>
<div class='logo-row'>
<a href="https://gitee.com"><img alt='Gitee — 基于 Git 的代码托管和研发协作平台' class='logo-img' src='/static/images/logo-black.svg?t=158106666'>
</a></div>
<div class='name-important'>
深圳市奥思网络科技有限公司版权所有
</div>
<div class='ui two column grid d-flex-center'>
<div class='nine wide column git-footer-left'>
<div class='ui four column grid' id='footer-left'>
<div class='column'>
<div class='ui link list'>
<div class='item'>
<a class="item" href="/all-about-git">Git 大全</a>
</div>
<div class='item'>
<a class="item" rel="nofollow" href="https://oschina.gitee.io/learn-git-branching/">Git 命令学习</a>
</div>
<div class='item'>
<a class="item" rel="nofollow" href="https://copycat.gitee.com/">CopyCat 代码克隆检测</a>
</div>
<div class='item'>
<a class="item" href="/appclient">APP与插件下载</a>
</div>
</div>
</div>
<div class='column'>
<div class='ui link list'>
<div class='item'>
<a class="item" href="/gitee_reward">Gitee Reward</a>
</div>
<div class='item'>
<a class="item" href="/gitee-stars">Gitee 封面人物</a>
</div>
<div class='item'>
<a class="item" href="/gvp">GVP 项目</a>
</div>
<div class='item'>
<a class="item" rel="nofollow" href="https://blog.gitee.com/">Gitee 博客</a>
</div>
<div class='item'>
<a class="item" href="/enterprises#nonprofit-plan">Gitee 公益计划</a>
</div>
</div>
</div>
<div class='column'>
<div class='ui link list'>
<div class='item'>
<a class="item" href="/api/v5/swagger">OpenAPI</a>
</div>
<div class='item'>
<a class="item" href="/help">帮助文档</a>
</div>
<div class='item'>
<a class="item" href="/self_services">在线自助服务</a>
</div>
<div class='item'>
<a class="item" href="/help/articles/4378">更新日志</a>
</div>
</div>
</div>
<div class='column'>
<div class='ui link list'>
<div class='item'>
<a class="item" href="/about_us">关于我们</a>
</div>
<div class='item'>
<a class="item" rel="nofollow" href="https://www.oschina.net/news/131099/oschina-hiring">加入我们</a>
</div>
<div class='item'>
<a class="item" href="/terms">使用条款</a>
</div>
<div class='item'>
<a class="item" href="/oschina/git-osc/issues">意见建议</a>
</div>
<div class='item'>
<a class="item" href="/links.html">合作伙伴</a>
</div>
</div>
</div>
</div>
</div>
<div class='seven wide column right aligned followus git-footer-right'>
<div class='qrcode mini_app'>
<img alt="微信小程序" src="https://assets.gitee.com/assets/mini_app-e5eee5a21c552b69ae6bf2cf87406b59.jpg" />
<p class='mini_app-text'>微信小程序</p>
</div>
<div class='qrcode weixin'>
<img alt="微信服务号" src="https://assets.gitee.com/assets/qrcode-weixin-9e7cfb27165143d2b8e8b268a52ea822.jpg" />
<p class='weixin-text'>微信服务号</p>
</div>
<div class='phone-and-qq column'>
<div class='ui list official-support-container'>
<div class='item'>
<a class="icon-popup" title="点击加入 Gitee 官方群" rel="nofollow" href="//qm.qq.com/cgi-bin/qm/qr?k=OUfztMuf7jElTIf78lMuNT_D_lZYOWnd"><i class='iconfont icon-logo-qq'></i>
<span>官方技术交流QQ群：515965326</span>
</a></div>
<div class='item mail-and-zhihu'>
<a rel="nofollow" href="mailto: git@oschina.cn"><i class='iconfont icon-msg-mail'></i>
<span id='git-footer-email'>git#oschina.cn</span>
</a></div>
<div class='item mail-and-zhihu'>
<a target="_blank" rel="nofollow" href="https://www.zhihu.com/org/ma-yun-osc/"><i class='iconfont icon-zhihu'></i>
<span>Gitee</span>
</a></div>
<div class='item tel'>
<a>
<i class='iconfont icon-tel'></i>
<span>售前及售后使用咨询：400-606-0201</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div class='bottombar'>
<div class='ui container'>
<div class='ui d-flex d-flex-between'>
<div class='seven wide column partner d-flex'>
<div class='open-atom d-flex-center'>
<img class="logo-openatom mr-1" alt="开放原子开源基金会" src="https://assets.gitee.com/assets/logo-openatom-d083391cc8a54e283529f3fc11cc38ca.svg" />
<a target="_blank" rel="nofollow" href="https://www.openatom.org/">开放原子开源基金会</a>
<div class='sub-title ml-1'>合作代码托管平台</div>
</div>
<div class='report-12377 d-flex-center ml-3'>
<img class="report-12377__logo mr-1" alt="违法和不良信息举报中心" src="https://assets.gitee.com/assets/12377@2x-1aa42ed2d2256f82a61ecf57be1ec244.png" />
<a target="_blank" rel="nofollow" href="https://12377.cn">违法和不良信息举报中心</a>
</div>
<div class='copyright ml-3'>
<a rel="nofollow" href="http://beian.miit.gov.cn/">粤ICP备12009483号</a>
</div>
</div>
<div class='nine wide column right aligned'>
<i class='icon world'></i>
<a href="/language/zh-CN">简 体</a>
/
<a href="/language/zh-TW">繁 體</a>
/
<a href="/language/en">English</a>
</div>
</div>
</div>
</div>
</footer>

<script>
  var officialEmail = $('#git-footer-email').text()
  $('#git-footer-main .icon-popup').popup({ position: 'bottom center' })
  $('#git-footer-email').text(officialEmail.replace('#', '@'))
  window.gon.popover_card_locale = {
    follow:"关注",
    unfollow:"已关注",
    gvp_title: "GVP - Gitee 最有价值开源项目",
    project: "项目",
    org: "开源组织",
    member: "",
    author: "作者",
    user_blocked: "该用户已被屏蔽或已注销",
    net_error: "网络错误",
    unknown_exception: "未知异常"
  }
  window.gon.select_message = {
    placeholder: "请输入个人空间地址或完整的邮箱地址"
  }
</script>
<script src="https://assets.gitee.com/webpacks/popover_card-744895b14c2b57ded1f1.bundle.js"></script>
<link rel="stylesheet" media="all" href="https://assets.gitee.com/webpacks/css/gitee_nps-69491f94919350b0258c.css" />
<script src="https://assets.gitee.com/webpacks/gitee_nps-b29bc4e2587fb39da300.bundle.js"></script>


<div class='side-toolbar'>
<div class='button toolbar-help'>
<i class='iconfont icon-help'></i>
</div>
<div class='ui popup left center dark'>点此查找更多帮助</div>
<div class='toolbar-help-dialog'>
<div class='toolbar-dialog-header'>
<h3 class='toolbar-dialog-title'>搜索帮助</h3>
<form class="toolbar-help-search-form" action="/help/load_keywords_data" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
<div class='ui icon input fluid toolbar-help-search'>
<input name='keywords' placeholder='请输入产品名称或问题' type='text'>
<i class='icon search'></i>
</div>
</form>

<i class='iconfont icon-close toolbar-dialog-close-icon'></i>
</div>
<div class='toolbar-dialog-content'>
<div class='toolbar-help-hot-search'>
<div class='toolbar-roll'>
<a class="init active" title="Git 命令在线学习" href="https://oschina.gitee.io/learn-git-branching/?utm_source==gitee-help-widget"><i class='Blue icon icon-command iconfont'></i>
<span>Git 命令在线学习</span>
</a><a class="init " title="如何在 Gitee 导入 GitHub 仓库" href="https://gitee.com/help/articles/4261?utm_source==gitee-help-widget"><i class='icon icon-clipboard iconfont orange'></i>
<span>如何在 Gitee 导入 GitHub 仓库</span>
</a></div>
<div class='toolbar-list'>
<div class='toolbar-list-item'>
<a href="/help/articles/4114">Git 仓库基础操作</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4166">企业版和社区版功能对比</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4191">SSH 公钥设置</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4194">如何处理代码冲突</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4232">仓库体积过大，如何减小？</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4279">如何找回被删除的仓库数据</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4283">Gitee 产品配额说明</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4284">GitHub仓库快速导入Gitee及同步更新</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4328">什么是 Release（发行版）</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4354">将 PHP 项目自动发布到 packagist.org</a>
</div>
</div>
</div>
<div class='toolbar-help-search-reseult'>
<div class='toolbar-help-flex-column'>
<div class='ui centered inline loader toolbar-help-loader'></div>
<div class='toolbar-list'></div>
<div class='toolbar-help-link-to-help'>
<a target="_blank" href="">查看更多搜索结果</a>
</div>
</div>
</div>
</div>
</div>
<script>
  var opt = { position: 'left center'};
  var $helpSideToolbar = $('.button.toolbar-help');
  var $toolbarRoll = $('.toolbar-roll');
  
  $(function() {
    if (true) {
      $helpSideToolbar.popup(opt).popup({lastResort:'left center'})
    } else {
      $helpSideToolbar.popup({lastResort:'left center'}).popup('show', opt);
      setTimeout(function() {
        $helpSideToolbar.popup('hide', opt);
      }, 3000);
    }
  
    if ($toolbarRoll.length) {
      setInterval(function() {
        var $nextActiveLink = $toolbarRoll.find('a.active').next();
        if (!$nextActiveLink.length) {
          $nextActiveLink = $toolbarRoll.find('a:first-child');
        }
        $nextActiveLink.attr('class', 'active').siblings().removeClass('active init');
      }, 5000);
    }
  })
</script>

<div class='ui popup dark left center transition hidden js-feedback-popup'>发送反馈</div>
<div class='button' id='feedback-btn'>
<i class='iconfont icon-feedback'></i>
</div>
<div class='popup button' id='project-user-message'>
<i class='iconfont icon-message'></i>
</div>
<div class='ui popup dark'>给仓库拥有者发送私信</div>
<div class='toolbar-appeal popup button'>
<i class='iconfont icon-report'></i>
</div>
<div class='ui popup dark'>
仓库举报
</div>
<script>
  $('.toolbar-appeal').popup({ position: 'left center' });
</script>

<div class='button gotop popup' id='gotop'>
<i class='iconfont icon-top'></i>
</div>
<div class='ui popup dark'>回到顶部</div>
</div>
<div class='ui modal tiny form' id='send-message-modal'>
<i class='iconfont icon-close close'></i>
<div class='header'>发送私信</div>
<div class='content'>
<div class='ui message hide'></div>
<div class='field'>
<textarea class='content-input' maxlength='255' placeholder='文明发言，真诚提问，请输入要发送的内容'></textarea>
</div>
</div>
<div class='actions'>
<div class='ui button blank cancel'>取消</div>
<div class='ui orange icon button disabled ok'>发送</div>
</div>
</div>
<script>
  var $mountedElem = $('#project-user-message'),
      $messageModal = $('#send-message-modal'),
      $modalTips = $messageModal.find('.message'),
      $contentInput = $messageModal.find('.content-input'),
      $captchaImage = $messageModal.find('.captcha_img'),
      $captchaInput = $messageModal.find('.captcha-field input'),
      $sendMessageBtn = $messageModal.find('.ok.button'),
      messageSending = false
  
  $mountedElem.on('click', function() {
    $captchaImage.trigger('click')
    $messageModal.modal('show')
  })
  
  $messageModal.modal({
    onApprove: function() {
      sendMessage()
      return false
    },
    onHidden: function() {
      $modalTips.hide()
    }
  })
  
  $captchaImage.on('click', function() {
    $captchaInput.val('')
  })
  
  $contentInput.on('change keydown', function(e) {
    var content = $(this).val()
    if ($.trim(content).length == 0) {
      $sendMessageBtn.addClass('disabled')
      return
    }
    $sendMessageBtn.removeClass('disabled')
    if ((e.ctrlKey || e.metaKey) && e.keyCode == 13) {
      $sendMessageBtn.trigger('click')
    }
  })
  
  function sendMessage() {
    if (messageSending) return
    $.ajax({
      url: '/notifications/messages',
      data: {
        link: true,
        content: $contentInput.val(),
        receiver_id: '92529',
        receiver_username: '',
        captcha: $captchaInput.val()
      },
      type: 'POST',
      dataType: 'JSON',
      beforeSend: function() {
        setSendStatus(true)
      },
      success: function(res) {
        if (res.status != 200) {
          showSendTips(res.message || '可能由于网络原因，留言发送失败，请稍后再试', 'error')
        } else {
          $contentInput.val('')
          showSendTips('私信发送成功')
          setTimeout(function() { $messageModal.modal('hide') }, 500)
        }
        setSendStatus(false)
      },
      error: function(err) {
        try {
          showSendTips(err.responseJSON.message, 'error')
        } catch(e) {
          showSendTips('可能由于网络原因，留言发送失败，请稍后再试', 'error')
        } finally {
          setSendStatus(false)
        }
      }
    })
  }
  
  function showSendTips(text, type) {
    $modalTips.html(text).show()
    if (type == 'error') {
      $modalTips.removeClass('success').addClass('error')
    } else {
      $modalTips.removeClass('error').addClass('success')
    }
  }
  
  function setSendStatus(value) {
    messageSending = value
    if (messageSending) {
      $sendMessageBtn.addClass('loading')
      $contentInput.attr('readonly', true)
    } else {
      $sendMessageBtn.removeClass('loading')
      $contentInput.attr('readonly', false)
    }
  }
</script>

<div class='ui modal small form' id='landing-complaint-modal'>
<i class='iconfont icon-close close'></i>
<div class='header'>
举报
</div>
<div class='content'>
<div class='appeal-success-tip hide'>
<i class='iconfont icon-ic_msg_success'></i>
<div class='appeal-success-text'>
举报成功
</div>
<span>
我们将于2个工作日内通过站内信和邮件方式反馈结果给你！
</span>
</div>
<div class='appeal-tip'>
请认真填写举报原因，如举报内容涉及 版权/产权 方面问题，请尽可能提供完整证据和材料。
</div>
<div class='ui form appeal-form'>
<div class='inline field'>
<label class='left-part appeal-type-wrap'>
举报类型
</label>
<div class='ui dropdown selection' id='appeal-types'>
<div class='text default'>
请选择举报类型
</div>
<i class='dropdown icon'></i>
<div class='menu'></div>
</div>
</div>
<div class='inline field'>
<label class='left-part'>
举报原因
</label>
<textarea class='appeal-reason' name='msg' placeholder='请说明举报原因' rows='3'></textarea>
</div>
<div class='inline field appeal-file-wrap'>
<label class='left-part appeal-file-text'>
举报材料
</label>
<div id='appeal-file-container'>
<div class='ui fluid action input'>
<input disabled id='appeal-file' placeholder='支持 png/jpg/jpeg/doc/docx/zip/pdf，大小不超过 10M' type='text'>
<div class='ui button'>
<input accept='image/png, image/jpeg, application/pdf, application/msword, aplication/zip, application/vnd.openxmlformats-officedocument.wordprocessingml.document' class='file-upload' type='file'>
浏览...
</input>
</div>
</div>
</div>
</div>
<div class='ui message callback-msg hide'></div>
<div class='ui small error text message exceeded-size-tip'></div>
</div>
</div>
<div class='actions'>
<div class='ui button blank cancel'>
取消
</div>
<div class='ui orange icon button disabled ok'>
发送
</div>
</div>
</div>
<script>
  var $elm = $('.toolbar-appeal'),
      $complaintModal = $('#landing-complaint-modal'),
      $complainType = $complaintModal.find('#appeal-types'),
      $complaintModalTip = $complaintModal.find('.callback-msg'),
      $complaintContent = $complaintModal.find('.appeal-reason'),
      $complaintBtn = $complaintModal.find('.ok.button'),
      complaintSending = false,
      fileObject = '';
  
  $('#appeal-types').dropdown({showOnFocus: false});
  $elm.on('click', function() {
     $.ajax({
      url: "/appeals/fetch_types",
      method: 'get',
      data:{'type': 'project'},
      success:function(data){
      var result = '';
      for(var i=0;i<data.length;i++){
        result = result + "<div class='item' data-value='"+data[i].id+"'>"+data[i].name+"</div>"
      }
      $('#appeal-types .menu').html(result)
    }
    })
    $complaintModal.modal({
      autofocus: false,
      onApprove: function() {
        sendAppeal();
        return false;
      },
      onHidden: function() {
        restoreDefault();
      }
    }).modal('show');
  })
  
  $complaintContent.on('change keyup', function(e) {
    var content = $(this).val();
    if ($.trim(content).length > 0 && $complainType.dropdown('get value').length > 0 ) {
      $complaintBtn.removeClass('disabled');
      return;
    }
    $complaintBtn.addClass('disabled');
  })
  
  $('#appeal-file-container .file-upload').on('change', function () {
    var reader = new FileReader();
    fileObject = this.files[0];
    if (fileObject) {
      var fileObjectName = fileObject.name.split('.');
      var fileExt = fileObjectName[fileObjectName.length - 1];
      if (fileObjectName.length < 2 || ['zip', 'png', 'jpg', 'jpeg', 'doc', 'docx', 'pdf'].indexOf(fileExt.toLowerCase()) < 0) {
        fileObject = '';
        $('.file-upload').val('');
        $('.exceeded-size-tip').text("请选择上传 png/jpg/jpeg/doc/docx/zip/pdf 类型的文件").show();
        return;
      }
      if (fileObject.size > 10*1024*1024) {
        fileObject = '';
        $('.file-upload').val('');
        $('.exceeded-size-tip').text("上传文件大小不能超过 10M").show();
        return;
      }
      reader.readAsDataURL(fileObject);
      reader.onload = function() {
        var data = reader.result;
        $('.exceeded-size-tip').text('').hide();
        $('#appeal-file').val(fileObject.name);
      }
    }
  })
  
  $('#appeal-types').dropdown({
    showOnFocus: false,
    onChange: function(value, text, $selectedItem) {
      if (value.length > 0 && $.trim($complaintContent.val()).length > 0) {
        $complaintBtn.removeClass('disabled');
        return
      }
      $complaintBtn.addClass('disabled');
    }
  })
  
  function restoreDefault() {
    $('#appeal-types').dropdown('restore defaults');
    $('.appeal-reason').val('');
    $('#appeal-file').val('');
    $('.exceeded-size-tip').text('').hide();
    $('#appeal-file-container .file-upload').val('');
    $complaintModalTip.text('').hide();
    setTimeout(function() {
      setSendTip(false);
    }, 1500);
  }
  
  function sendAppeal() {
    var appealType = $complainType.dropdown('get value');
    var reason = $complaintContent.val();
    if (complaintSending) {
      return;
    }
    var formData = new FormData();
    formData.append('appeal_type_id', appealType);
    formData.append('reason', reason);
    formData.append('file', fileObject);
    formData.append('appeal_type', 'Project')
    $.ajax({
      type: 'POST',
      url: "/appeals?target_id=1672969",
      cache: false,
      contentType: false,
      processData: false,
      data: formData,
      beforeSend: function() {
        setSendStatus(true);
      },
      success: function(res) {
        if (res.status == 200) {
          setSendTip(true);
          setTimeout(function() {
            $complaintModal.modal('hide');
            restoreDefault();
          }, 3000);
        }
        setSendStatus(false);
      },
      error: function(err) {
        showTips(err.responseJSON.message, 'error');
        setSendStatus(false);
      }
    })
  }
  
  function showTips(text, type) {
    $complaintModalTip.text(text).show();
    if (type == 'error') {
      $complaintModalTip.removeClass('success').addClass('error');
    } else {
      $complaintModalTip.removeClass('error').addClass('success');
    }
  }
  
  function setSendStatus(value) {
    complaintSending = value;
    if (complaintSending) {
      $complaintBtn.addClass('loading');
      $complaintContent.attr('readonly', true);
      $complainType.attr('readonly', true);
    } else {
      $complaintBtn.removeClass('loading');
      $complaintContent.attr('readonly', false);
      $complainType.attr('readonly', false);
    }
  }
  
  function setSendTip(value) {
    if (value) {
      $('.appeal-success-tip').removeClass('hide');
      $('.appeal-tip').addClass('hide');
      $('.appeal-form').addClass('hide');
      $('#landing-complaint-modal .actions').addClass('hide');
    } else {
      $('.appeal-success-tip').addClass('hide');
      $('.appeal-tip').removeClass('hide');
      $('.appeal-form').removeClass('hide');
      $('#landing-complaint-modal .actions').removeClass('hide');
    }
  }
</script>

<style>
  .side-toolbar .bdsharebuttonbox a {
    font-size: 24px;
    color: white !important;
    opacity: 0.9;
    margin: 6px 6px 0px 6px;
    background-image: none;
    text-indent: 0;
    height: auto;
    width: auto;
  }
</style>
<style>
  #udesk_btn a {
    margin: 0px 20px 217px 0px !important;
  }
</style>
<script>
  (function() {
    $('#project-user-message').popup({
      position: 'left center'
    });
  
  }).call(this);
</script>
<script>
  Gitee.initSideToolbar({})
</script>
<link rel="stylesheet" media="all" href="https://assets.gitee.com/webpacks/css/side_toolbar_feedback-7e09f46182ec5f6f4e00.css" />
<script src="https://assets.gitee.com/webpacks/side_toolbar_feedback-3d2b39ff20612a81ae05.bundle.js"></script>



<style>
  .gitee-stars-main-widget {
    display: none;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 106; }
    .gitee-stars-main-widget .close-icon {
      width: 20px;
      right: 10px;
      position: absolute;
      top: 0px;
      cursor: pointer; }
    .gitee-stars-main-widget .people-image {
      width: 200px;
      margin: 0 10px; }
  
  .gitee-stars-main-widget.gitee-stars-widget .close-icon {
    left: 20px; }
</style>
<div class='gitee-stars-main-widget pendan-widget'>
<a target="_blank" href="https://www.oschina.net/event/2325449?inviter=4469669"><img class="people-image" src="https://images.gitee.com/uploads/images/2022/0322/102709_98ea5571_1850385.png" alt="102709 98ea5571 1850385" />
<img class="close-icon" src="https://images.gitee.com/uploads/images/2022/0322/102708_fe1978b7_1850385.png" alt="102708 fe1978b7 1850385" />
</a></div>
<script>
  $(function () {
    var $giteeStarsWidget = $('.gitee-stars-main-widget')
    var cookieKey = "visit-gitee--2022-03-22 10:27:42 +0800"
  
    if ($.cookie(cookieKey) == 1) {
      $giteeStarsWidget.hide()
    } else {
      $giteeStarsWidget.show()
    }
  
    $giteeStarsWidget.on('click', '.close-icon', function (e) {
      e.preventDefault()
      $.cookie(cookieKey, 1, {path: '/', expires: 60})
      $giteeStarsWidget.hide()
    })
  })
</script>


<script>
  (function() {
    this.__gac = {
      domain: 'www.oschina.net'
    };
  
  }).call(this);
</script>

<script src="https://assets.gitee.com/assets/bdstatic/app-070a9e339ac82bf2bf7ef20375cd4121.js"></script>
<script src="https://hm.baidu.com/hm.js?bc1e4312510a4ca5306d3fa25d073a56" async="async"></script>
<script src="https://assets.gitee.com/webpacks/build_status-d8f352b1f0d03559d731.bundle.js"></script>
</body>
</html>
