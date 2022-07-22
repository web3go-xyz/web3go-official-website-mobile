<template>
  <div class="page-wrap">
    <div class="page-header" v-moveBottom>
      <img
        class="logo"
        src="@/assets/images/logo.png"
        alt=""
        @click="$router.push({ name: 'main' })"
      />

      <img
        @click="drawer = true"
        class="drawer-icon"
        src="@/assets/images/dropdown.png"
        alt=""
      />
    </div>
    <router-view></router-view>
    <div class="page-footer" :class="{ article: $route.name == 'article' }">
      <div class="layout">
        <div class="search-wrap">
          <div class="search">
            <el-input
              type="textarea"
              v-model="inputValue"
              placeholder="Enter your email to get latest Web3go News!"
            />
            <div class="btn" @click="subscribe">
              <span class="text">Subscribe</span>
              <img src="@/assets/images/arrow3.png" alt="" />
            </div>
          </div>
        </div>
        <div class="website-info">
          <div class="i-left">
            <div class="logo">
              <img src="@/assets/images/logo(3).png" alt="" />
            </div>
            <div class="icons">
              <img
                title="Github"
                @click="jumpUrl('https://github.com/web3go-xyz')"
                src="@/assets/images/Vector(10).png"
                alt=""
              />
              <img
                title="Discord"
                @click="jumpUrl('https://discord.gg/NTrHSqyuRg')"
                src="@/assets/images/Vector(11).png"
                alt=""
              />
              <img
                title="Twitter"
                @click="jumpUrl('https://twitter.com/Web3Go')"
                src="@/assets/images/Vector(12).png"
                alt=""
              />
              <img
                title="Telegram"
                @click="jumpUrl('https://t.me/web3go')"
                src="@/assets/images/Vector(13).png"
                alt=""
              />
            </div>
            <div
              class="foundation"
              @click="
                jumpUrl(
                  'https://github.com/w3f/Grants-Program/blob/master/applications/Web3Go.md'
                )
              "
            >
              <img src="@/assets/images/Frame23.png" alt="" />
            </div>
          </div>
          <div class="list-row">
            <div class="col-item">
              <div class="title">About</div>
              <div
                class="link"
                @click="
                  jumpUrl(
                    'https://zealous-pufferfish-7e6.notion.site/a2552d2b97e14c498a9ddef3edbb9161?v=5d8fd89aaee0443695f8f8bb96b82c9b'
                  )
                "
              >
                Roadmap
              </div>
              <div class="link" @click="jumpToArticle('Privacy Policy')">
                Privacy Policy
              </div>
              <div class="link" @click="jumpToArticle('Terms and Conditions')">
                Terms and Conditions
              </div>
            </div>
            <div class="col-item">
              <div class="title">Media</div>
              <div class="link" @click="jumpUrl('https://twitter.com/Web3Go')">
                Twitter
              </div>
              <div
                class="link"
                @click="jumpUrl('https://discord.gg/NTrHSqyuRg')"
              >
                Discord
              </div>
              <div class="link" @click="jumpUrl('https://t.me/web3go')">
                Telegram
              </div>
              <div class="link" @click="jumpUrl('https://web3go.medium.com/')">
                Medium
              </div>
            </div>
          </div>
          <div class="list-row">
            <div class="col-item">
              <div class="title">Resources</div>
              <div class="link" @click="jumpUrl('https://doc.web3go.xyz/')">
                Docs
              </div>
              <div
                class="link"
                @click="jumpUrl('https://github.com/web3go-xyz')"
              >
                Github
              </div>
              <div
                class="link"
                @click="
                  jumpUrl(
                    'https://www.youtube.com/channel/UCjsd_RBe4pyxtq_UEkxsDYQ'
                  )
                "
              >
                Youtube
              </div>
            </div>
          </div>
          <div class="gray">©2021-2022 WEB3GO TECHNOLOGY PTE.LTD.</div>
        </div>
      </div>
    </div>
    <el-drawer
      modal-class="home-index-drawer"
      v-model="drawer"
      :show-close="false"
      :with-header="false"
      direction="ttb"
    >
      <div class="drawer-content">
        <div class="header">
          <img
            @click="drawer = false"
            src="@/assets/images/b-close.png"
            alt=""
          />
        </div>
        <div class="menu-list">
          <div
            class="menu-item"
            v-for="(v, i) in menus"
            :key="i"
            @click="clickMenu(v)"
          >
            {{ v.name }}
          </div>
          <div class="btn-wrap">
            <el-button
              class="btn"
              type="primary"
              @click="jumpUrl('https://app.web3go.xyz/')"
              >Start Today</el-button
            >
          </div>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import { addEmail } from "@/api/website";
export default {
  data() {
    return {
      drawer: false,
      inputValue: "",
      menus: [
        {
          name: "Solutions",
          link: "",
        },
        {
          name: "News",
          link: "https://web3go.medium.com/",
        },
        {
          name: "Docs",
          link: "https://doc.web3go.xyz/",
        },
        {
          name: "Github",
          link: "https://github.com/web3go-xyz",
        },
        {
          name: "Media Kit",
          link: "https://drive.google.com/drive/u/2/folders/1lY-d2xA0HMoJXw87Gf5cgjH4S7TSwHpY",
        },
      ],
    };
  },
  mounted() {
    if (this.$route.params.scrollTop) {
      setTimeout(() => {
        window.scrollTo({
          top: this.$route.params.scrollTop,
          behavior: "smooth",
        });
      }, 100);
    }
  },
  watch: {
    $route(newValue, oldValue) {
      document.documentElement.scrollTop = 0;
    },
  },
  methods: {
    subscribe() {
      if (!this.inputValue) {
        return;
      }
      addEmail({
        email: this.inputValue,
      }).then((d) => {
        if (d.code == 200) {
          this.inputValue = "";
          this.$message.success({
            message: "Thanks for subscription!",
            showClose: true,
            duration: 1204400,
          });
        } else {
          this.$message.warning({
            message: d.msg,
            showClose: true,
            duration: 3000,
          });
        }
      });
    },
    jumpToArticle(str) {
      this.$router.push({
        name: "article",
        query: {
          article: str,
        },
      });
    },
    clickMenu(v) {
      if (v.name == "Solutions") {
        if (this.$route.name == "main") {
          setTimeout(() => {
            window.scrollTo({
              top: 1000,
              behavior: "smooth",
            });
            this.drawer = false;
          }, 100);
        } else {
          this.$router.push({
            name: "main",
            params: {
              scrollTop: 1000,
            },
          });
        }
      } else {
        this.jumpUrl(v.link);
      }
    },
    jumpUrl(url) {
      if (!url) {
        return;
      }
      window.open(url);
    },
  },
};
</script>

<style lang="less" scoped>
.page-wrap {
  max-width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background: #f3f4f6;
  .page-header {
    padding: 10px 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .logo {
      z-index: 1;
      height: 22px;
      width: auto;
    }
    .drawer-icon {
      cursor: pointer;
      height: 12px;
    }
  }
  .page-footer {
    padding-top: 108px;
    margin-top: 115px;
    position: relative;
    background: #e0e5f2;
    &.article {
      padding-top: 56px;
      .search-wrap {
        display: none;
      }
    }
    .search-wrap {
      position: absolute;
      top: -65px;
      left: 31px;
      right: 31px;
      display: flex;
      .search {
        width: 100%;
        position: relative;
        border-radius: 20px;

        ::v-deep(.el-textarea) {
          .el-textarea__inner {
            resize: none;
            border-radius: 12px;
            padding: 7px 17px;
            padding-bottom: 25px;
            height: 120px;
            box-sizing: border-box;
            font-weight: 500;
            font-size: 18px;
            box-sizing: border-box;
            border: 0;
            box-shadow: none;
            outline: 0;
          }
          ::-webkit-input-placeholder {
            color: #a3aed0;
          }
        }

        .btn {
          position: absolute;
          right: -2px;
          bottom: -15px;
          cursor: pointer;
          background-image: url(~@/assets/images/Rectangle120.png);
          width: 170px;
          height: 40px;
          line-height: 40px;
          background-size: contain;
          background-repeat: no-repeat;
          text-align: center;
          .text {
            vertical-align: middle;
            font-weight: 500;
            font-size: 12px;
            color: #ffffff;
          }
          img {
            vertical-align: middle;
            height: 6px;
            margin-left: 9px;
          }
        }
      }
    }
    .website-info {
      .i-left {
        text-align: center;
        margin-bottom: 48px;
        .logo {
          img {
            height: 56px;
          }
        }
        .icons {
          padding-top: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            cursor: pointer;
            margin: 0 15px;
            height: 23px;
            &:nth-child(1) {
              height: 25px;
            }
            &:nth-child(2) {
              height: 27px;
            }
          }
        }
        .foundation {
          cursor: pointer;
          margin-top: 34px;
          &:hover {
            opacity: 0.8;
          }
          img {
            height: 73px;
          }
        }
      }
      .list-row {
        padding: 0 58px;
        display: flex;
        justify-content: space-between;
        .col-item {
          .title {
            font-weight: 700;
            font-size: 16px;
            color: #21272a;
            margin-bottom: 16px;
          }
          .link {
            cursor: pointer;
            font-weight: 400;
            font-size: 16px;
            color: #4d5358;
            margin-bottom: 16px;
            &:hover {
              opacity: 0.8;
            }
          }
        }
      }
      .gray {
        padding-bottom: 23px;
        text-align: center;
        margin-top: 5px;
        font-size: 12px;
        color: #a3aed0;
      }
    }
  }
}
.drawer-content {
  .header {
    display: flex;
    justify-content: flex-end;
    img {
      height: 12px;
    }
  }
}
</style>
<style lang="less">
.home-index-drawer {
  .el-drawer {
    height: 70% !important;
  }
  .el-drawer__body {
    padding: 16px 25px !important;
  }
  .menu-list {
    .menu-item {
      text-align: center;
      margin: 16px 0;
      font-size: 20px;
      font-weight: 400;
      color: #121619;
      padding: 10px 46px;
      cursor: pointer;
      position: relative;
    }
    .btn-wrap {
      margin-top: 10px;
      text-align: center;
    }
    .btn {
      width: 310px;
      height: 44px;
    }
  }
}
</style>
