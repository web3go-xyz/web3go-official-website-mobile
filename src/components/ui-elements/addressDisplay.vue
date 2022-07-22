<template>
  <div class="address-display">
    <el-tooltip
      effect="light"
      :content="addressLabel.address"
      placement="top-start"
    >
      <div class="address-shorter">
        {{ addressLabel.address }}
      </div>
    </el-tooltip>
    <div>
      <img
        @click="copyAddress(addressLabel.originalAddress)"
        @mouseenter="mouseenter()"
        @mouseleave="mouseleave()"
        :src="localImg"
        class="copyImg"
      />
    </div>
    <el-tooltip
      v-if="addressLabel"
      :disabled="addressLabel.description == ''"
      effect="light"
      :content="addressLabel.description"
      placement="top-start"
    >
      <div class="address-label">
        {{ addressLabel.addressTag }}
      </div>
    </el-tooltip>
    <textarea
      class="textarea-hidden"
      :id="'input-' + addressLabel.originalAddress"
    ></textarea>
  </div>
</template>

<script>
import copyImg from "@/assets/images/copy.png";
import profileCopyImg from "@/assets/images/profile/copy.png";
import profileCopyHoverImg from "@/assets/images/profile/copy_hover.png";
export default {
  props: {
    address: {
      type: String,
      default: "",
    },
    isPrifile: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      profileCopyImg,
      profileCopyHoverImg,
      copyImg,
      localImg: null,
    };
  },
  created() {
    this.localImg = this.isPrifile ? profileCopyImg : copyImg;
  },
  computed: {
    addressLabel() {
      let self = this;
      let addressTag = self.$store.getters.addressTag;
      if (addressTag) {
        for (let index = 0; index < addressTag.length; index++) {
          const element = addressTag[index];
          if (element.address === self.address) {
            let result = {
              description: "",
              addressTag: element.addressTag,
              address: element.address,
              originalAddress: element.address,
            };

            if (element.description) {
              let desc = JSON.parse(element.description);
              result.showTagInsteadOfAddress =
                desc.showTagInsteadOfAddress || false;
              result.description = desc.simpleDescription || "";
            }
            if (result.showTagInsteadOfAddress) {
              result.address = result.addressTag;
              result.originalAddress = result.addressTag;
            }
            return result;
          }
        }
      }
      return {
        originalAddress: self.address,
        address: self.address,
      };
    },
  },
  methods: {
    mouseenter() {
      if (!this.isPrifile) return;
      this.localImg = profileCopyHoverImg;
    },
    mouseleave() {
      if (!this.isPrifile) return;
      this.localImg = profileCopyImg;
    },
    copyAddress(targetAddress) {
      let id = "input-" + targetAddress;
      var input = document.getElementById(id);
      input.value = targetAddress;
      console.log("copy:", targetAddress);
      input.select();
      document.execCommand("copy"); // 执行浏览器复制命令

      this.$notify({
        // title: address,
        message: "Address Copied",
        position: "bottom-left",
        showClose: false,
        duration: 1500,
        type: "success",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.address-display {
  display: flex;
  align-items: center;
  .address-shorter {
    width: 220px;
  }
  .address-label {
    margin: 0px 10px 0px;
    padding: 0px 10px;
    color: black;
    background: rgba(185, 185, 185, 0.63);
    border-radius: 6px;
    font-size: 13px;
  }

  .copyImg {
    margin-left: 10px;
    margin-top: 5px;
    width: 16px;
    cursor: pointer;
  }
  .copyImg:hover {
    opacity: 0.6;
  }
  .textarea-hidden {
    opacity: 0;
    width: 0px;
  }
}
</style>
