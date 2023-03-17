<template>
  <div>
    <section class="video-section layout">
      <div class="section-main">
        <div class="big-text">
          <slide-up class="line1">Everyone can</slide-up>
          <slide-up class="line2" :delay="0.1">play with</slide-up>
          <slide-up class="line3" :delay="0.2">
            <span class="blue">&lt;-</span>blockchain data<span class="blue"
              >&gt;</span
            >
          </slide-up>
        </div>
        <div v-moveUp="0.5" class="img-animate">
          <!-- video图片元素点击域 -->

          <img class="bg1" src="@/assets/images/Ellipse74.png" alt="" />
          <img class="bg2" src="@/assets/images/Ellipse11.png" alt="" />
          <div class="img-wrap">
            <img class="big-group" src="@/assets/images/Group208.png" alt="" />
            <div id="code-animate" class="img-item"></div>
            <img class="finger" src="@/assets/images/Group84.png" alt="" />
            <img class="person" src="@/assets/images/id.png" alt="" />
            <img class="direction" src="@/assets/images/Ethereum.png" alt="" />
          </div>
        </div>
        <div class="small-text" v-moveUp="0.5">
          Web3Go is an all-in-one open data analytics and service platform where
          everyone can grasp the value behind blockchain data.
        </div>
        <div class="btn-wrap" v-moveUp="0.8">
          <el-button
            @click="jumpUrl('https://app.web3go.xyz/')"
            class="btn"
            type="primary"
          >
            <span>Start</span>
            <img class="arrow" src="@/assets/images/arrowRight.png" alt="" />
          </el-button>
        </div>
        <div class="video-wrap">
          <div class="video" @click="openVideo">
            <iframe
              style="border-radius: 5px"
              width="100%"
              height="200rem"
              src="https://www.youtube.com/embed/nWPv2bv-HiI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <!-- <video
              ref="video"
              autoplay
              class="video"
              poster="@/assets/images/image26.png"
              src="@/assets/video.mp4"
              controls="controls"
            >
              your browser does not support the video tag
            </video> -->
          </div>
        </div>
      </div>
    </section>
    <section class="card-section layout">
      <div class="section-title">
        Web3Go Data<br />
        Solutions
      </div>
      <!-- <img class="circle-bg" src="@/assets/images/line-circle.png" alt="" /> -->
      <div class="card-list">
        <div
          class="card card1"
          @click="jumpUrl('https://app.web3go.xyz/')"
          v-moveUp="0.2"
        >
          <hover-animate-box
            :rotate="0"
            @mouseenter="animateStart('dashboardAnimateInstance')"
            @mouseleave="animateStop('dashboardAnimateInstance')"
          >
            <div class="card-inner">
              <div class="card-title">Go Analytics</div>
              <div class="split"></div>
              <div class="text">
                Formatting, visualization, sharing, and analysis of multichain
                on-chain data
              </div>
              <img class="arrow" src="@/assets/images/bc-arrow.png" alt="" />
              <div class="animate" id="dashboard-animate"></div>
              <img
                class="big-bg"
                src="@/assets/images/line-circle.png"
                alt=""
              />
            </div>
          </hover-animate-box>
        </div>
        <div
          class="card card2"
          @click="jumpUrl('https://moonid.web3go.xyz/')"
          v-moveUp="0.5"
        >
          <div class="card-inner">
            <div class="card-title">Go ID</div>
            <div class="split"></div>
            <div class="text">
              Identity management and Social-Fi dApp: create, show and share
              your Web3 profile
            </div>
            <img class="arrow" src="@/assets/images/bc-arrow.png" alt="" />
            <img class="big-bg" src="@/assets/images/line-circle.png" alt="" />
            <div class="animate">
              <img class="img" src="@/assets/images/id.webp" alt="" />
              <img class="btrect" src="@/assets/images/btrect.png" alt="" />
            </div>
          </div>
        </div>
        <div
          class="card card3"
          @click="jumpUrl('https://moonpush.web3go.xyz/')"
          v-moveUp="0.8"
        >
          <hover-animate-box
            @mouseenter="animateStart('alertAnimateInstance')"
            @mouseleave="animateStop('alertAnimateInstance')"
            :rotate="0"
          >
            <div class="card-inner">
              <div class="card-title">Go Push</div>
              <div class="split"></div>
              <div class="text">
                Automatic and immediate notification of real-time on-chain
                activities
              </div>
              <img class="arrow" src="@/assets/images/bc-arrow.png" alt="" />
              <img
                class="big-bg"
                src="@/assets/images/line-circle.png"
                alt=""
              />
              <div class="animate" id="alert-animate"></div>
            </div>
          </hover-animate-box>
        </div>
      </div>
    </section>
    <section class="number-section layout">
      <div class="section-title">
        <div class="circle"></div>
        <span>
          {{ numberConfig.userCount }}+ Users' intelligent data assistant
        </span>
      </div>
      <div class="section-content">
        <div class="bg"></div>

        <div class="item item3" :key="3">
          <div class="il">
            <img src="@/assets/images/light2.png" alt="" />
          </div>
          <div class="ir">
            <div class="num">
              <number-grow
                ref="numberGrow3"
                :value="numberConfig.DashboardCount"
              />
            </div>
            <div class="label">Dashboards</div>
          </div>
        </div>
        <div class="item item2" :key="2">
          <div class="il">
            <img src="@/assets/images/light1.png" alt="" />
          </div>
          <div class="ir">
            <div class="num">
              <number-grow ref="numberGrow2" :value="numberConfig.AlertCount" />
            </div>
            <div class="label">Alerts</div>
          </div>
        </div>
        <div class="item item1" :key="1">
          <div class="il">
            <img src="@/assets/images/dashboard.png" alt="" />
          </div>
          <div class="ir">
            <div class="num">
              <number-grow
                ref="numberGrow1"
                :value="numberConfig.PredictionCount"
              />
            </div>
            <div class="label">Predictions</div>
          </div>
        </div>
      </div>
    </section>
    <section class="network-section">
      <img class="bg" src="@/assets/images/gray-bg.png" alt="" />
      <img class="logo" src="@/assets/images/Group_88.png" alt="" />
      <img class="icon icon1" src="@/assets/images/litmuts.png" alt="" />
      <img class="icon icon2" src="@/assets/images/Acala.png" alt="" />
      <img class="icon icon3" src="@/assets/images/Frame_16.png" alt="" />
      <img class="icon icon4" src="@/assets/images/Mask__group.png" alt="" />
      <img class="icon icon5" src="@/assets/images/Subquery.png" alt="" />
      <img class="icon icon6" src="@/assets/images/kusama.png" alt="" />
      <img class="icon icon7" src="@/assets/images/Mask_group-1.png" alt="" />
      <img class="icon icon8" src="@/assets/images/polkadot.png" alt="" />
      <img class="icon icon9" src="@/assets/images/litentry-icon.png" alt="" />
      <img class="icon icon10" src="@/assets/images/litentry-1.png" alt="" />
      <img class="icon icon11" src="@/assets/images/RMRK.png" alt="" />
      <img class="icon icon12" src="@/assets/images/biforst.png" alt="" />

      <div class="text">
        <slide-up class="inner-text">We support various networks and</slide-up>
        <slide-up :delay="0.2" class="inner-text">
          power leading Web3 projects
        </slide-up>
      </div>
    </section>
    <section class="investor-section layout">
      <div class="section-title">
        <span> Investors </span>
      </div>
      <div v-moveUp="0.4" class="logo-list">
        <div class="img-wrap">
          <img :src="require('@/assets/images/image43.png')" alt="" />
        </div>
        <div v-for="v in 5" :key="v" class="img-wrap">
          <img :src="require('@/assets/images/iv' + v + '.png')" alt="" />
        </div>
      </div>
    </section>
    <section class="users-section layout">
      <div class="section-title">
        <span> Who's using Web3Go </span>
      </div>
      <div class="subtitle">
        Prediticive modeling with one click to simulate your rewards and support
        your investing strategy
      </div>
      <div class="section-main">
        <div class="gray-bg"></div>
        <div class="img-wrap" v-moveUp="0.2">
          <img class="dot" src="@/assets/images/bluedot.png" alt="" />
          <el-carousel
            arrow="never"
            :interval="15000"
            trigger="click"
            height="36.1rem"
            class="carousel"
            ref="slideCarousel"
          >
            <el-carousel-item v-for="(item, i) in slideList" :key="i">
              <div class="item">
                <p class="i-text">{{ item.text }}</p>
                <div class="i-bottom">
                  <div
                    class="img"
                    :style="{ backgroundImage: 'url(' + item.image + ')' }"
                  ></div>
                  <div class="ib-right">
                    <div class="bold">{{ item.name }}</div>
                    <div class="text">{{ item.info }}</div>
                  </div>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <!-- <div class="m-right">
          <slide-up
            ref="slideTextRef1"
            class="words"
            :class="{ small: currentSlider.smallText }"
          >
            {{ currentSlider.text }}
          </slide-up>
          <div class="m-bottom">
            <div class="mb-left">
              <slide-up ref="slideTextRef2" class="bold" :delay="0.2">{{
                currentSlider.name
              }}</slide-up>
              <slide-up ref="slideTextRef3" class="text" :delay="0.4">{{
                currentSlider.info
              }}</slide-up>
            </div>
          </div>
        </div> -->
      </div>
    </section>
    <section class="news-section layout">
      <div class="section-title">
        <span> Trending News </span>
        <div class="more" @click="jumpUrl('https://web3go.medium.com/')">
          <span>More</span>
          <img src="@/assets/images/right-arrow2.png" alt="" />
        </div>
      </div>

      <div class="news-list">
        <div class="scroll">
          <div
            class="item"
            v-for="(v, i) in newsList"
            :key="i"
            v-moveUp="0.2 * i"
            @click="jumpUrl(v.link)"
          >
            <hover-animate-box :rotate="0">
              <div class="item-inner">
                <div class="img-wrap">
                  <img :src="v.image" alt="" />
                </div>
                <div class="text">{{ v.text }}</div>
                <div class="btn-wrap">
                  <div class="btn">Read article</div>
                </div>
              </div>
            </hover-animate-box>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HoverAnimateBox from "@/components/HoverAnimateBox";
import FontFlow from "@/components/FontFlow";
import NumberGrow from "@/components/NumberGrow";
import lottie from "lottie-web";
import codeAnimate from "@/assets/animateJson/code/code.json";
import dashboardAnimate from "@/assets/animateJson/dashboard/dashboard.json";
import idAnimate from "@/assets/animateJson/id/id.json";
import alertAnimate from "@/assets/animateJson/alert/alert.json";
import mouseAnimate from "@/assets/animateJson/mouse/mouse.json";
import SlideUp from "@/components/SlideUp";
import throttle from "lodash.throttle";
import { webUserList, webNewsList, numberConfig } from "@/api/website";
import { getImgPath } from "@/utils";
codeAnimate.assets.forEach((item) => {
  item.u = "";
  if (item.w && item.h) {
    item.p = require(`@/assets/animateJson/code/images/${item.p}`);
  }
});
dashboardAnimate.assets.forEach((item) => {
  item.u = "";
  if (item.w && item.h) {
    item.p = require(`@/assets/animateJson/dashboard/images/${item.p}`);
  }
});
idAnimate.assets.forEach((item) => {
  item.u = "";
  if (item.w && item.h) {
    item.p = require(`@/assets/animateJson/id/images/${item.p}`);
  }
});
alertAnimate.assets.forEach((item) => {
  item.u = "";
  if (item.w && item.h) {
    item.p = require(`@/assets/animateJson/alert/images/${item.p}`);
  }
});
export default {
  components: {
    FontFlow,
    HoverAnimateBox,
    NumberGrow,
    SlideUp,
  },
  data() {
    return {
      numberConfig: {},
      autoplay: true,
      codeAnimateInstance: null,
      mouseAnimateInstance: null,
      dashboardAnimateInstance: null,
      idAnimateInstance: null,
      alertAnimateInstance: null,
      showScrollTip: true,
      newsList: [],
      // @click="jumpUrl('https://doc.web3go.xyz/')
      menus: [
        {
          name: "Solutions",
          link: "",
        },
        {
          name: "News",
          link: "",
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
      slideList: [{}],
    };
  },
  created() {
    this.createKeyFrame();
    this.getData();
  },
  mounted() {
    this.initAnimate();
    if (this.$refs.slideCarousel) this.slideBanner();
  },
  unmounted() {
    // 移动端会出现跳转页面回来，多一个动画元素的情况
    this.codeAnimateInstance.destroy();
    this.dashboardAnimateInstance.destroy();
    this.idAnimateInstance.destroy();
    this.alertAnimateInstance.destroy();

    window.removeEventListener("scroll", this.windowScrollFunction);
  },
  methods: {
    slideBanner() {
      //选中的轮播图
      var box = document.querySelector(".el-carousel__container");
      var startPoint = 0;
      var stopPoint = 0;
      var startPointY = 0;
      var stopPointY = 0;
      //重置坐标
      var resetPoint = function () {
        startPoint = 0;
        stopPoint = 0;
      };
      //手指按下
      box.addEventListener("touchstart", function (e) {
        //手指点击位置的X坐标
        startPoint = e.changedTouches[0].pageX;
        startPointY = e.changedTouches[0].pageY;
      });
      //手指滑动
      box.addEventListener("touchmove", function (e) {
        //手指滑动后终点位置X的坐标
        stopPoint = e.changedTouches[0].pageX;
        stopPointY = e.changedTouches[0].pageY;
      });
      //当手指抬起的时候，判断图片滚动离左右的距离
      let that = this;
      box.addEventListener("touchend", function (e) {
        if (stopPoint == 0 || startPoint - stopPoint == 0) {
          resetPoint();
          return;
        }
        if (
          startPoint - stopPoint > 0 &&
          Math.abs(startPointY - stopPointY) < 20
        ) {
          resetPoint();
          that.$refs.slideCarousel.next();
          return;
        }
        if (
          startPoint - stopPoint < 0 &&
          Math.abs(startPointY - stopPointY) < 20
        ) {
          resetPoint();
          that.$refs.slideCarousel.prev();
          return;
        }
      });
    },
    getData() {
      webUserList().then((userListRes) => {
        this.slideList = userListRes.rows.map((v, i) => ({
          image: getImgPath(v.image),
          smallText: v.article.length > 450,
          text: v.article,
          name: v.name,
          info: v.introduction,
        }));
      });
      webNewsList().then((newsListRes) => {
        this.newsList = newsListRes.rows.map((v) => ({
          image: getImgPath(v.image),
          text: v.name,
          link: v.link,
        }));
      });
      numberConfig().then((numberConfigRes) => {
        this.numberConfig = numberConfigRes.rows[0];
        this.$nextTick(() => {
          this.windowScrollFunction();
          this.bindEvent();
        });
      });
    },
    createKeyFrame() {
      for (let i = 0; i < 12; i++) {
        const a = Math.random() * (Math.random > 0.5 ? 1 : -1) * 10;
        const b = Math.random() * (Math.random > 0.5 ? 1 : -1) * 10;
        document.styleSheets[0].insertRule(
          "@keyframes homeBreath" +
            (i + 1) +
            "" +
            "{" +
            "0%{transform: translate(" +
            0 +
            "px, " +
            0 +
            "px)}" +
            "100%{transform: translate(" +
            a +
            "px, " +
            b +
            "px)}"
        );
      }
    },
    openVideo() {
      this.$refs.videoModal.init();
    },

    bindEvent() {
      window.addEventListener("scroll", this.windowScrollFunction);
    },
    windowScrollFunction: throttle(function () {
      // 数字滚动
      this.$refs.numberGrow1.handleWindowScroll();
      this.$refs.numberGrow2.handleWindowScroll();
      this.$refs.numberGrow3.handleWindowScroll();
    }, 50),
    jumpUrl(url) {
      if (!url) {
        return;
      }
      window.open(url);
    },

    animateStart(instance) {
      this[instance].goToAndPlay(0);
    },
    animateStop(instance, time) {
      this[instance].goToAndStop(time !== undefined ? time : 4000);
    },
    initAnimate() {
      this.codeAnimateInstance = lottie.loadAnimation({
        container: document.getElementById("code-animate"), // the dom element that will contain the animation
        renderer: "svg",
        loop: true,
        animationData: codeAnimate, // the path to the animation json
      });
      // 降低动画帧率，不然会卡顿
      this.codeAnimateInstance.setSubframe(false);
      this.dashboardAnimateInstance = lottie.loadAnimation({
        container: document.getElementById("dashboard-animate"), // the dom element that will contain the animation
        renderer: "svg",
        loop: true,
        animationData: dashboardAnimate, // the path to the animation json
      });
      this.dashboardAnimateInstance.setSubframe(false);
      this.idAnimateInstance = lottie.loadAnimation({
        container: document.getElementById("id-animate"), // the dom element that will contain the animation
        renderer: "svg",
        loop: true,
        animationData: idAnimate, // the path to the animation json
      });
      this.idAnimateInstance.setSubframe(false);
      this.alertAnimateInstance = lottie.loadAnimation({
        container: document.getElementById("alert-animate"), // the dom element that will contain the animation
        renderer: "svg",
        loop: true,
        animationData: alertAnimate, // the path to the animation json
      });
      this.alertAnimateInstance.setSubframe(false);
    },
  },
};
</script>

<style lang="less" scoped>
.video-section {
  position: relative;
  .section-main {
    .big-text {
      text-align: center;
      font-weight: 600;
      font-size: 34px;
      color: #121619;
      padding-top: 25px;
      .blue {
        color: #4318ff;
      }
    }
    .small-text {
      margin-top: 20px;
      font-weight: 400;
      font-size: 20px;
      color: #343a3f;
      padding: 0 22px;
    }
    .btn-wrap {
      margin-top: 38px;
      position: relative;
      padding: 0 32px;
      .btn {
        width: 100%;
        height: 44px;
        .arrow {
          width: 6px;
          margin-left: 10px;
        }
      }
    }
  }
  .img-animate {
    margin-top: 15px;
    text-align: center;
    position: relative;
    .bg1 {
      pointer-events: none;
      right: 0;
      top: -220px;
      position: absolute;
      width: 237px;
    }
    .bg2 {
      pointer-events: none;
      left: 0;
      top: 58px;
      position: absolute;
      width: 277px;
    }
    .img-wrap {
      display: inline-block;
      position: relative;
    }
    .big-group {
      width: 300px;
    }
    #code-animate {
      right: 15px;
      top: 158px;
      position: absolute;
      width: 138px;
      height: 84px;
    }
    .finger {
      right: 133px;
      top: 180px;
      position: absolute;
      width: 125px;
    }
    .person {
      right: 0px;
      top: 136px;
      position: absolute;
      width: 35px;
    }
    .direction {
      right: -18px;
      top: 206px;
      position: absolute;
      width: 60px;
    }
  }
  .video-wrap {
    padding: 0 32px;
    margin-top: 43px;

    video {
      border-radius: 4px;
      width: 100%;
      display: inline-block;
      cursor: pointer;
      position: relative;
      &:hover {
        .circle {
          transform: translate(-50%, -50%) scale(1.2);
        }
        .rect {
          display: none;
        }
        .rect2 {
          display: block;
        }
      }
    }
  }
  .mouse-wrap {
    margin: 130px 0;
    text-align: center;
    #mouse-animate {
      display: inline-block;
      width: 24px;
      height: auto;
      transition: opacity 0.5s;
    }
  }
}
.card-section {
  margin-top: 40px;
  .section-title {
    text-align: center;
    font-weight: 500;
    font-size: 34px;
    line-height: 42px;
  }
  .circle-bg {
    position: absolute;
    left: 436px;
    width: 495px;
  }
  .card-list {
    padding-left: 32px;
    padding-right: 32px;

    .card {
      position: relative;
      overflow: hidden;
      margin-top: 24px;
      height: 335px;
      box-sizing: border-box;
      .card-title {
        font-weight: 500;
        font-size: 24px;
        color: #000000;
      }
      .split {
        margin-top: 24px;
        width: 16px;
        height: 3px;
        background: #4318ff;
      }
      .text {
        letter-spacing: -0.02em;
        margin-top: 16px;
        width: 160px;
        font-weight: 400;
        line-height: 24px;
        font-size: 16px;
        color: #4d5358;
      }

      .arrow {
        width: 44px;
        position: absolute;
        right: 26px;
        top: 24px;
      }

      .animate {
        width: 200px;
        position: absolute;
        bottom: -5px;
        right: 14px;
        .img {
          position: relative;
          z-index: 2;
          width: 100%;
        }
        .btrect {
          width: 171px;
          position: absolute;
          bottom: 13px;
          left: 13px;
        }
      }
    }
    .card-inner {
      overflow: hidden;
      cursor: pointer;
      box-sizing: border-box;
      padding: 24px;
      width: 100%;
      height: 100%;
      background: rgba(195, 207, 243, 0.2);
      backdrop-filter: blur(10px);
      border-radius: 20px;
      transition: all 0.2s;
      &:hover {
        background: rgba(255, 255, 255, 0.5);
        box-shadow: 0px 40px 50px -20px rgba(112, 144, 176, 0.19);
        backdrop-filter: blur(10px);
        .btn {
          background-color: #7551ff;
        }
      }
    }
    .card1 {
      .big-bg {
        width: 319px;
        position: absolute;
        top: 76px;
        left: 40px;
        opacity: 0.4;
      }
      .animate {
        bottom: 10px;
      }
    }
    .card2 {
      .big-bg {
        width: 283px;
        position: absolute;
        top: 65px;
        left: -46px;
        opacity: 0.4;
      }
    }
    .card3 {
      .big-bg {
        width: 319px;
        position: absolute;
        top: 76px;
        left: 40px;
        opacity: 0.4;
      }
    }
  }
}
.number-section {
  padding-top: 48px;
  padding-bottom: 150px;

  .section-title {
    position: relative;
    padding: 0 30px;
    .circle {
      position: absolute;
      width: 112.87px;
      height: 112.87px;
      border-radius: 50%;
      background: linear-gradient(
        171.96deg,
        #ccc9ed 5.35%,
        rgba(238, 240, 254, 0) 91.1%
      );
      transform: rotate(-15deg);
    }
    span {
      width: 243px;
      position: absolute;
      top: 20px;
      right: 48px;
      font-weight: 500;
      font-size: 34px;
    }
  }
  .section-content {
    position: relative;
    padding: 0 45px;
    padding-top: 200px;
    .bg {
      top: 190px;
      left: 30px;
      position: absolute;
      width: 400.38px;
      height: 400.38px;
      border-radius: 50%;
      background: linear-gradient(
        141.26deg,
        rgba(204, 201, 237, 0.3) 13.93%,
        rgba(238, 240, 254, 0) 84.09%
      );
      transform: rotate(-39.05deg);
    }
    .item {
      margin-top: 20px;
      position: relative;
      display: flex;
      align-items: flex-start;
      .il {
        margin-top: 13px;
        margin-right: 18px;
        width: 56px;
        height: 56px;
        background: #ffffff;
        box-shadow: 3px 12px 22px -4px rgba(0, 0, 0, 0.13);
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 24px;
        }
      }
      .num {
        font-weight: 500;
        font-size: 42px;
        color: #343a3f;
      }
      .label {
        font-weight: 400;
        font-size: 24px;
        color: #4d5358;
      }
    }
  }
}
.network-section {
  height: 280px;
  position: relative;
  .bg {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    width: 200%;
  }
  .logo {
    width: 146px;
    position: absolute;
    left: 50%;
    top: 20px;
    transform: translateX(-50%);
  }
  @keyframes breath {
    from {
      transform: translate(0, 2px);
    }

    to {
      transform: translate(0, -2px);
    }
  }
  .icon {
    width: 29px;
    position: absolute;
  }
  .icon1 {
    width: 29px;
    position: absolute;
    animation: homeBreath1 1s ease infinite 650ms alternate;
    left: 89px;
    top: 190px;
  }
  .icon2 {
    width: 29px;
    position: absolute;
    animation: homeBreath2 1s ease-in-out infinite 500ms alternate;
    left: 66px;
    top: 154px;
  }
  .icon3 {
    width: 29px;
    position: absolute;
    animation: homeBreath3 1s ease-in infinite 100ms alternate;
    left: 36px;
    top: 200px;
  }
  .icon4 {
    width: 29px;
    position: absolute;
    animation: homeBreath4 1s ease-out infinite 0ms alternate;
    left: 136px;
    top: 223px;
  }
  .icon5 {
    width: 29px;
    position: absolute;
    animation: homeBreath5 1s linear infinite 100ms alternate;
    left: 78px;
    top: 236px;
  }
  .icon6 {
    width: 29px;
    position: absolute;
    animation: homeBreath6 1s ease-out infinite 800ms alternate;
    left: 130px;
    top: 140px;
  }
  .icon7 {
    width: 29px;
    position: absolute;
    animation: homeBreath7 1s ease infinite 400ms alternate;
    right: 50px;
    top: 220px;
  }
  .icon8 {
    width: 29px;
    position: absolute;
    animation: homeBreath8 1s linear infinite 1000ms alternate;
    right: 71px;
    top: 150px;
  }
  .icon9 {
    width: 29px;
    position: absolute;
    animation: homeBreath9 1s ease infinite 200ms alternate;
    right: 180px;
    top: 184px;
  }
  .icon10 {
    width: 29px;
    position: absolute;
    animation: homeBreath10 1s ease-in infinite 100ms alternate;
    right: 31%;
    top: 50%;
  }
  .icon11 {
    width: 29px;
    position: absolute;
    animation: homeBreath11 1s ease-in-out infinite 500ms alternate;
    right: 28.6%;
    top: 187px;
  }
  .icon12 {
    width: 29px;
    position: absolute;
    animation: homeBreath12 1s ease-out infinite 600ms alternate;
    right: 36.6%;
    top: 234px;
  }

  .text {
    text-align: center;
    display: block;
    width: 650px;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    color: #121619;
    position: absolute;
    letter-spacing: -0.02em;
    left: 50%;
    top: 70px;
    transform: translateX(-50%);
  }
}
.investor-section {
  margin-top: 26px;
  position: relative;
  .section-title {
    font-weight: 500;
    font-size: 42px;
    text-align: center;
  }
  .logo-list {
    margin-top: 10px;
    padding: 0 40px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 50%);
    .img-wrap {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 70px;
      &:nth-of-type(1) {
        img {
          height: 31px;
        }
      }
      &:nth-of-type(2) {
        justify-content: flex-end;
        img {
          height: 22px;
        }
      }
      &:nth-of-type(3) {
        img {
          height: 41px;
        }
      }
      &:nth-of-type(4) {
        justify-content: flex-end;
        img {
          height: 39px;
        }
      }
      &:nth-of-type(5) {
        img {
          height: 30px;
        }
      }
      &:nth-of-type(6) {
        justify-content: flex-end;
        img {
          height: 31px;
        }
      }
    }
  }
}
.users-section {
  padding-top: 72px;
  position: relative;
  .section-title {
    font-weight: 500;
    font-size: 42px;
    text-align: center;
  }
  .subtitle {
    padding: 0 38px;
    margin-top: 12px;
    margin-bottom: 24px;
    font-weight: 400;
    font-size: 16px;
    color: #4d5358;
  }
  .section-main {
    margin-top: 72px;
    margin: 0 16px;
    padding: 0 16px;
    display: flex;
    position: relative;
    .gray-bg {
      position: absolute;
      top: 44px;
      bottom: 44px;
      left: 0;
      right: 0;
      background: #e9edf7;
      border-radius: 12px;
      height: 444px;
    }
    .img-wrap {
      width: 424px;
      position: relative;
      .dot {
        z-index: 2;
        position: absolute;
        width: 38px;
        top: -15px;
        left: -10px;
      }
      .carousel {
        .item {
          position: relative;
          height: 540px;
          box-sizing: border-box;
          background: #ffffff;
          box-shadow: 0px 0px 20px -22px rgba(112, 115, 176, 0.3);
          border-radius: 12px;
          padding: 24px;
          .i-text {
            font-weight: 400;
            font-size: 16px;
            line-height: 28px;
            padding: 0;
            margin: 0;
          }
          .i-bottom {
            overflow: hidden;
            position: absolute;
            bottom: 24px;
            display: flex;
            align-items: center;
            .img {
              flex: none;
              width: 48px;
              height: 48px;
              border-radius: 50%;
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
            }
            .ib-right {
              flex: 1;
              margin-left: 13px;
              .bold {
                font-weight: 700;
                font-size: 16px;
                margin-bottom: 4px;
              }
              .text {
                width: 200px;
                font-weight: 400;
                font-size: 14px;
              }
            }
          }
        }
        ::v-deep(.el-carousel__indicators) {
          .is-active {
            .el-carousel__button {
              background: white;
            }
          }
          .el-carousel__button {
            background: #e0e5f2;
            border-radius: 50%;
            width: 6px;
            height: 6px;
          }
        }
      }
    }
  }
}
.news-section {
  position: relative;
  margin-top: 140px;
  .section-title {
    padding: 0 25px;
    font-weight: 500;
    font-size: 34px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .more {
      display: inline-block;
      padding: 5px;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
      span {
        font-weight: 400;
        font-size: 16px;
        color: #4318ff;
        vertical-align: middle;
      }
      img {
        margin-left: 9px;
        width: 7px;
        vertical-align: middle;
      }
    }
  }
  .news-list {
    margin-top: 20px;
    padding: 0 16px;
    .scroll {
      display: flex;
      justify-content: space-between;
      /*适应苹果*/
      -webkit-overflow-scrolling: touch;
      overflow-x: auto;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    .item {
      width: 147px;
      height: 229px;
      margin-right: 16px;
      box-sizing: border-box;
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        .item-inner {
          box-shadow: 0px 40px 58px -20px rgba(112, 144, 176, 0.2);
        }
      }
      .item-inner {
        cursor: pointer;
        height: 100%;
        background: #ffffff;
        border-radius: 20px;
      }
      .img-wrap {
        border-radius: 20px 20px 0 0;
        overflow: hidden;
        img {
          display: block;
          width: 147px;
          height: 91px;
        }
      }
      .text {
        padding: 10px 12px;
        padding-bottom: 0;
        margin-bottom: 10px;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #000000;
        position: relative;
        height: 95px;
        box-sizing: border-box;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
      }
      .btn-wrap {
        padding: 0 12px;
        .btn {
          display: inline-block;
          font-weight: 700;
          font-size: 14px;
          color: #4318ff;
        }
      }
    }
  }
}
</style>