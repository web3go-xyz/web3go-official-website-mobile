<template>
  <div class="identity-icon-plus">
    <div class="address-icon" @click="copy(address)">
      <div v-if="isPolkadot">
        <Identicon :size="iconSize" :theme="'polkadot'" :value="address" />
      </div>
      <div v-if="isEthereum">
        <img
          class="eth-icon"
          v-bind:style="{ width: iconSize + 'px' }"
          :src="makeIcon4Ethereum(address)"
          alt=""
        />
      </div>
    </div>
    <div class="address" v-if="!showIdentity">
      <div
        class="address-display"
        v-if="addressDisplayCompact"
        v-bind:style="{ 'font-size': fontSize + 'px' }"
      >
        <el-tooltip :effect="tooltipTheme" placement="top">
          <div slot="content" @click="copy(address)">{{ address }}</div>
          <div class="display" v-bind:style="{ 'font-size': fontSize + 'px' }">
            {{ compactAddress(address) }}
          </div>
        </el-tooltip>
      </div>

      <div
        class="address-display"
        v-else
        v-bind:style="{ 'font-size': fontSize + 'px' }"
      >
        {{ address }}
      </div>
    </div>
    <div
      class="identity"
      v-if="showIdentity"
      v-bind:style="{ 'font-size': fontSize + 'px' }"
    >
      <div class="judgement" :class="judgement_icon" v-if="judgement_icon">
        <el-tooltip :effect="tooltipTheme" placement="top">
          <div slot="content">{{ judgement_desc }}</div>
          <span
            class="material-icons"
            v-bind:style="{ 'font-size': fontSize + 'px' }"
          >
            {{ judgement_icon }}
          </span>
        </el-tooltip>
      </div>
      <el-tooltip :effect="tooltipTheme" placement="top">
        <div slot="content" @click="copy(address)">{{ address }}</div>
        <div class="display" v-bind:style="{ 'font-size': fontSize + 'px' }">
          {{ identity.display }}
        </div>
      </el-tooltip>
    </div>

    <div class="copy-action"></div>
    <div class="identity-more-info" v-if="showIdentityMoreInfo">
      <div class="item legal" v-if="identity.legal">
        <el-tooltip :effect="tooltipTheme" placement="top">
          <div slot="content" @click="copy(identity.legal)">
            Legal name:&nbsp;{{ identity.legal }}
          </div>
          <span
            class="material-icons"
            v-bind:style="{ 'font-size': fontSize + 'px' }"
          >
            account_circle
          </span>
        </el-tooltip>
      </div>
      <div class="item email" v-if="identity.email">
        <el-tooltip :effect="tooltipTheme" placement="top">
          <div slot="content" @click="copy(identity.email)">
            Email:&nbsp;{{ identity.email }}
          </div>
          <span
            class="material-icons"
            v-bind:style="{ 'font-size': fontSize + 'px' }"
          >
            mail_outline
          </span>
        </el-tooltip>
      </div>
      <div class="item web" v-if="identity.web">
        <el-tooltip :effect="tooltipTheme" placement="top">
          <div slot="content" @click="copy(identity.web)">
            Web:&nbsp;{{ identity.web }}
          </div>
          <span
            class="material-icons"
            v-bind:style="{ 'font-size': fontSize + 'px' }"
          >
            language
          </span>
        </el-tooltip>
      </div>
      <div class="item twitter" v-if="identity.twitter">
        <el-tooltip :effect="tooltipTheme" placement="top">
          <div slot="content" @click="copy(identity.twitter)">
            Twitter:&nbsp;{{ identity.twitter }}
          </div>
          <img
            src="@/assets/images/twitter-logo.svg"
            v-bind:style="{ width: fontSize + 'px' }"
          />
        </el-tooltip>
      </div>
      <div class="item public-key" v-if="identity.accountPublicKey">
        <el-tooltip :effect="tooltipTheme" placement="top">
          <div slot="content" @click="copy(identity.accountPublicKey)">
            Public key:&nbsp;{{ identity.accountPublicKey }}
          </div>
          <span
            class="material-icons"
            v-bind:style="{ 'font-size': fontSize + 'px' }"
          >
            key
          </span>
        </el-tooltip>
      </div>
    </div>
    <div class="tips"></div>
  </div>
</template>

<script>
// import Identicon from "@polkadot/vue-identicon";
import makeBlockie from "ethereum-blockies-base64";
export default {
  components: { Identicon },
  name: "Identity-Icon-Plus",
  props: {
    addressInfo: {
      type: Object,
      default: {},
    },
    loadAddressIdentityPromise: {
      type: Function,
    },
  },
  data() {
    return {
      identity: {
        showMoreInfo: false,
        display: "",
        legal: "",
        web: "",
        email: "",
        twitter: "",
        accountPublicKey: "",
        subOf: "",
        judgement: "",
      },
    };
  },
  created() {
    this.updateIdentity();
  },
  watch: {
    address(newValue, oldValue) {
      if (newValue != oldValue) {
        this.updateIdentity();
      }
    },
  },
  computed: {
    address() {
      return this.addressInfo.address;
    },
    iconSize() {
      return this.addressInfo.iconSize || 32;
    },
    fontSize() {
      return this.addressInfo.fontSize || 18;
    },

    addressDisplayCompact() {
      return this.addressInfo.addressDisplayCompact || false;
    },
    isPolkadot() {
      if (this.addressInfo.isEthereum === true) {
        return false;
      }
      return this.addressInfo.isPolkadot || true;
    },
    isEthereum() {
      return this.addressInfo.isEthereum || false;
    },

    showIdentity() {
      if (this.identity && this.identity.display) {
        return true;
      }
      return false;
    },
    showIdentityMoreInfo() {
      if (this.identity && this.identity.showMoreInfo) {
        return true;
      }
      return false;
    },
    judgement_icon() {
      if (this.identity && this.identity.judgement != undefined) {
        if (
          this.identity.judgement
            .toLowerCase()
            .indexOf("KnownGood".toLowerCase()) > -1
        ) {
          return "verified_user"; //KnownGood
        }
        if (
          this.identity.judgement
            .toLowerCase()
            .indexOf("Reasonable".toLowerCase()) > -1
        ) {
          return "verified_user"; //Reasonable
        }
        return "remove_circle"; //No Judgement
      }
      return "";
    },
    judgement_desc() {
      if (this.identity && this.identity.judgement != undefined) {
        if (
          this.identity.judgement
            .toLowerCase()
            .indexOf("KnownGood".toLowerCase()) > -1
        ) {
          return "Identity level: KnownGood"; //KnownGood
        }
        if (
          this.identity.judgement
            .toLowerCase()
            .indexOf("Reasonable".toLowerCase()) > -1
        ) {
          return "Identity level: Reasonable"; //Reasonable
        }
        return "Identity level: No Judgement"; //No Judgement
      }
      return "";
    },
    tooltipTheme() {
      return this.addressInfo.tooltipTheme || "light";
    },
  },
  methods: {
    updateIdentity() {
      let self = this;
      self.identity = {
        showMoreInfo: false,
        display: "",
        legal: "",
        web: "",
        email: "",
        twitter: "",
        accountPublicKey: "",
        subOf: "",
        judgement: "",
      };

      if (self.addressInfo.identity) {
        Object.assign(self.identity, self.addressInfo.identity);
        if (self.identity.display) {
          return;
        }
      }
      if (self.addressInfo.enableDynamicLoading === false) {
        return;
      }

      if (self.loadAddressIdentityPromise) {
        let promise = self.loadAddressIdentityPromise(self.addressInfo);
        promise.then((info) => {
          Object.assign(self.identity, info.identity);
        });
      } else {
        let promise = self.loadAddressIdentityAsync(self.addressInfo);
        promise.then((info) => {
          Object.assign(self.identity, info.identity);
        });
      }
      // console.log(self.identity);
    },
    loadAddressIdentityAsync(addressInfo) {
      if (this.$utils.loadAddressIdentityAsync) {
        return this.$utils.loadAddressIdentityAsync(addressInfo);
      } else {
        console.log(
          "$utils.loadAddressIdentityAsync not defined, you need to pass a custom loadAddressIdentityFunc as props"
        );
      }
    },
    compactAddress(address) {
      if (address && address.length > 20) {
        let rangeLength = Math.ceil(address.length / 4);
        let subLength = address.length / rangeLength;
        return (
          address.substring(0, subLength) +
          "..." +
          address.substring(address.length - subLength)
        );
      } else {
        return address;
      }
    },
    makeIcon4Ethereum(address) {
      return makeBlockie(address);
    },
    copy(text, notify) {
      if (notify === undefined || notify === null) {
        notify = true;
      }
      const input = document.createElement("input");
      input.id = new Date().getTime();
      document.body.appendChild(input);
      input.setAttribute("value", text);
      input.select();
      if (document.execCommand("copy")) {
        document.execCommand("copy");
        if (notify) {
          this.$notify({
            message: "Copied Success",
            position: "bottom-left",
            showClose: false,
            duration: 1000,
            type: "success",
          });
        }
      }
      document.body.removeChild(input);
    },
  },
};
</script>

<style lang="less" scoped>
.identity-icon-plus {
  display: flex;
  align-items: center;

  .address-icon {
    cursor: pointer;
    .eth-icon {
      border-radius: 2px;
    }
    margin-right: 5px;
  }
  .address {
    padding: 0px 5px;
    .address-display {
      font-size: 18px;
    }
  }

  .identity {
    padding: 0px 2px;
    display: flex;
    .judgement {
      cursor: pointer;
      padding: 0px 2px 0px 0px;
      &.verified_user {
        color: #e6017a;
      }
      &.remove_circle {
        color: #98959f;
      }
    }
    .display {
      font-size: 18px;
      text-decoration: underline;
      cursor: pointer;
      font-weight: 700;
    }
  }
  .identity-more-info {
    margin-left: 5px;
    padding-left: 5px;
    border-left: solid 1px #ddd;
    display: flex;
    .item {
      cursor: pointer;
      padding: 0px 2px;
    }
    .legal {
    }
    .email {
    }
    .twitter {
      padding: 2px 2px 0px;
      img {
        height: 20px;
        width: 20px;
      }
    }
    .public-key {
    }
  }
}
</style>
