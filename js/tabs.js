;(function($) {
	var Tab = function(tab) {
      var _this_ = this;
      // 保存单个tab组件
      this.tab = tab;
      // 默认配置参数
      this.config = {
          // 用来定义鼠标的触发类型,是click还是mouseover
          "triggerType":"mouseover",
          // 用来定义内容切换效果,是直接切换还是淡入淡出效果
		  "effect":"default",
		  // 默认展示第几个tab
		  "invoke":1,
		  // 用来定义tab是否自动切换,当指定了时间间隔,就表示自动切换并且切换时间为指定时间间隔
		  "auto": false
      };
      // 如果配置参数存在,就扩展掉默认的参数
      if(this.getConfig()) {
      	$.extend(this.config,this.getConfig());
      }

      // 保存tab标签列表,对应的内容列表
      this.tabItems = this.tab.find("ul.tab-nav li");
      this.contentItems = this.tab.find("div.content-wrap div.content-item");

      // 保存配置参数
      var config = this.config;

      if(config.triggerType==="click") {
      	this.tabItems.bind(config.triggerType, function() {
      		alert(1);
      	})
      } else if(config.triggerType==="mouseover" || config.triggerType!="click") {
      	this.tabItems.mouseover(function() {
      		alert(2);
      	})
      }
	};

	Tab.prototype = {  
      // 获取配置参数
      getConfig: function() {
      	// 拿一下tab elem节点的data-config
      	var config = this.tab.attr("data-config");
      	// 确保有配置参数
      	if(config&&config!="") {
      		return $.parseJSON(config);
      	} else {
      		return null;
      	}
      }
	};

	window.Tab = Tab;
})(jQuery);