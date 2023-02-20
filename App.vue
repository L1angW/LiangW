<script>
import Vue from 'vue';
	export default {
		onLaunch: function() {
      this.setAppInfo()
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
    methods: {
      // 获取系统栏高度
      setAppInfo() {
        uni.getSystemInfo({
          success: function(e) {
            Vue.prototype.StatusBar = e.statusBarHeight;
          }
        })
      }
    }
	}
</script>

<style lang="scss">
	/*每个页面公共css */
  @import "uview-ui/index.scss";
</style>
