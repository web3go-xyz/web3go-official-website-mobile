<template>
  <div class="page-wrap">
    <div class="page-header" v-moveBottom>
      <div class="layout">
        <img class="bg-circle" src="@/assets/images/bg-circle.png" />
        <img
          class="logo"
          src="@/assets/images/logo.png"
          alt=""
          @click="$router.push({ name: 'main' })"
        />
        <div class="right-menu">
          <div
            class="menu-item"
            v-for="(v, i) in menus"
            :key="i"
            @click="clickMenu(v)"
          >
            {{ v.name }}
            <!-- <font-flow :text="v.name"></font-flow> -->
          </div>
          <el-button
            class="btn"
            type="primary"
            @click="jumpUrl('https://app.web3go.xyz/')"
            >Start Today</el-button
          >
        </div>
      </div>
    </div>
    <router-view></router-view>
    <div class="page-footer" :class="{ article: $route.name == 'article' }">
      <div class="layout">
        <div class="search-wrap">
          <div class="search">
            <el-input
              v-model="inputValue"
              placeholder="Enter your email to get latest Web3go News!"
            />
            <svg class="rect" width="50" height="80">
              <polygon
                class="triangle"
                stroke-linejoin="round"
                points="10,10 40,10 10,70"
              />
            </svg>
          </div>
          <div class="btn" @click="subscribe">
            <svg class="rect" width="340" height="80">
              <polygon
                class="triangle"
                stroke-linejoin="round"
                points="40,10 330,10 330,70 10,70"
              />
            </svg>
            <div class="shadow"></div>
            <div class="inner">
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
            <div class="gray">©2021-2022 WEB3GO TECHNOLOGY PTE.LTD.</div>
          </div>
          <div class="i-right">
            <div class="col-item">
              <div class="title">About</div>
              <div class="link">Roadmap</div>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { addEmail } from "@/api/website";
export default {
  data() {
    return {
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
    padding: 28px;
    .layout {
      display: flex;
      justify-content: space-between;
      position: relative;
      .bg-circle {
        pointer-events: none;
        height: 240px;
        width: auto;
        position: absolute;
        top: -28px;
        left: -100px;
      }
      .logo {
        cursor: pointer;
        z-index: 1;
        height: 40px;
        width: auto;
      }
      .right-menu {
        display: flex;
        align-items: center;
        .menu-item {
          margin: 0 12px;
          font-size: 20px;
          font-weight: 400;
          color: #121619;
          padding: 11px 36px;
          cursor: pointer;
          position: relative;
          &::after {
            content: "";
            display: block;
            position: absolute;
            bottom: 10px;
            width: 0;
            height: 2px;
            background: #4318ff;
            transition: all 0.4s;
          }
          &:hover {
            &:after {
              width: calc(100% - 72px);
            }
          }
        }
        .btn {
          height: 44px;
          padding: 0 36px;
          margin-left: 20px;
        }
      }
    }
  }
  .page-footer {
    padding-top: 136px;
    margin-top: 148px;
    height: 425px;
    box-sizing: border-box;
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
      top: -40px;
      display: flex;
      .search {
        position: relative;
        box-shadow: 0px 28px 30px rgb(112 144 176 / 10%);
        border-radius: 20px;

        ::v-deep(.el-input) {
          .el-input__inner {
            border-radius: 20px;
            padding: 0 35px;
            height: 80px;
            width: 917px;
            font-weight: 500;
            font-size: 24px;
            box-sizing: border-box;
            border: 0;
            box-shadow: none;
            outline: 0;
          }
        }
        .rect {
          position: absolute;
          pointer-events: none;
          right: -28px;
          .triangle {
            fill: white;
            stroke: white;
            stroke-width: 20;
          }
        }
      }
      .btn {
        position: relative;
        margin-left: 20px;
        cursor: pointer;

        &:hover,
        &:focus {
          .triangle {
            fill: #7551ff !important;
            stroke: #7551ff !important;
          }
        }
        .rect {
          display: block;
          pointer-events: none;
          left: -28px;
          .triangle {
            fill: #4318ff;
            stroke: #4318ff;
            stroke-width: 20;
          }
        }
        .shadow {
          position: absolute;
          bottom: 0;
          height: 1px;
          left: 11px;
          right: 25px;
          box-shadow: 7px 16px 31px 10px rgb(202 198 248);
        }

        .inner {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          .text {
            font-weight: 500;
            font-size: 24px;
            color: #ffffff;
          }
          img {
            width: 13px;
            margin-left: 18px;
          }
        }
      }
    }
    .website-info {
      display: flex;
      .i-left {
        .logo {
          img {
            width: 151px;
          }
        }
        .icons {
          padding-left: 31px;
          padding-top: 15px;
          display: flex;
          align-items: center;
          img {
            cursor: pointer;
            margin-left: 17px;
            height: 14px;
            &:hover {
              opacity: 0.8;
            }
            &:nth-child(1) {
              height: 15px;
            }
            &:nth-child(2) {
              height: 17px;
            }
          }
        }
        .foundation {
          cursor: pointer;
          margin-top: 39px;
          &:hover {
            opacity: 0.8;
          }
          img {
            width: 240px;
          }
        }
        .gray {
          margin-top: 16px;
          font-weight: 400;
          font-size: 12px;
          color: #a3aed0;
        }
      }
      .i-right {
        display: flex;
        margin-left: 110px;
        .col-item {
          margin-left: 147px;
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
    }
  }
}
</style>