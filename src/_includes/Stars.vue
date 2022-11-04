<template>
  <svg viewBox="0 0 349 55" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient
        v-if="colors"
        id="fill-mask"
        x1="0"
        y1="0"
        x2="100%"
        y2="0"
        gradientUnits="objectBoundingBox"
        :colors="colors"
      >
        <stop
          v-for="(color, index) in colors.reverse()"
          :stop-color="color"
          :offset="mapRange(index, 0, colors.length - 1, 0, 1)"
          :key="index"
        />
      </linearGradient>
      <linearGradient x1="0" y1="0" x2="100%" y2="0" v-else id="fill-mask">
        <stop stop-color="#333" />
      </linearGradient>
    </defs>
    <mask
      id="final-star-shape-mask"
      style="mask-type: alpha"
      maskUnits="objectBoundingBox"
      x="0"
      y="0"
      width="100%"
      height="100%"
    >
      <g fill="white">
        <path
          id="star-to-measure"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M28.5 0L23.7767 18.692L6.2178 10.7305L17.8869 26.0776L0.714554 34.8418L19.989 35.2873L16.1343 54.1776L28.5 39.386L40.8657 54.1776L37.011 35.2873L56.2854 34.8418L39.1131 26.0776L50.7822 10.7305L33.2233 18.692L28.5 0ZM44.3996 15.8205L31.8703 21.5015L28.5 8.16364L25.1297 21.5015L12.6004 15.8205L20.927 26.7715L8.67352 33.0253L22.4269 33.3431L19.6764 46.8224L28.5 36.2678L37.3236 46.8224L34.5731 33.3431L48.3265 33.0253L36.073 26.7715L44.3996 15.8205Z"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M101.5 0L96.7767 18.692L79.2178 10.7305L90.8869 26.0776L73.7146 34.8418L92.989 35.2873L89.1343 54.1776L101.5 39.386L113.866 54.1776L110.011 35.2873L129.285 34.8418L112.113 26.0776L123.782 10.7305L106.223 18.692L101.5 0ZM117.4 15.8205L104.87 21.5015L101.5 8.16364L98.1297 21.5015L85.6004 15.8205L93.927 26.7715L81.6735 33.0253L95.4269 33.3431L92.6764 46.8224L101.5 36.2678L110.324 46.8224L107.573 33.3431L121.326 33.0253L109.073 26.7715L117.4 15.8205Z"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M174.5 0L169.777 18.692L152.218 10.7305L163.887 26.0776L146.715 34.8418L165.989 35.2873L162.134 54.1776L174.5 39.386L186.866 54.1776L183.011 35.2873L202.285 34.8418L185.113 26.0776L196.782 10.7305L179.223 18.692L174.5 0ZM190.4 15.8205L177.87 21.5015L174.5 8.16364L171.13 21.5015L158.6 15.8205L166.927 26.7715L154.674 33.0253L168.427 33.3431L165.676 46.8224L174.5 36.2678L183.324 46.8224L180.573 33.3431L194.326 33.0253L182.073 26.7715L190.4 15.8205Z"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M247.5 0L242.777 18.692L225.218 10.7305L236.887 26.0776L219.715 34.8418L238.989 35.2873L235.134 54.1776L247.5 39.386L259.866 54.1776L256.011 35.2873L275.285 34.8418L258.113 26.0776L269.782 10.7305L252.223 18.692L247.5 0ZM263.4 15.8205L250.87 21.5015L247.5 8.16364L244.13 21.5015L231.6 15.8205L239.927 26.7715L227.674 33.0253L241.427 33.3431L238.676 46.8224L247.5 36.2678L256.324 46.8224L253.573 33.3431L267.326 33.0253L255.073 26.7715L263.4 15.8205Z"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M320.5 0L315.777 18.692L298.218 10.7305L309.887 26.0776L292.715 34.8418L311.989 35.2873L308.134 54.1776L320.5 39.386L332.866 54.1776L329.011 35.2873L348.285 34.8418L331.113 26.0776L342.782 10.7305L325.223 18.692L320.5 0ZM336.4 15.8205L323.87 21.5015L320.5 8.16364L317.13 21.5015L304.6 15.8205L312.927 26.7715L300.674 33.0253L314.427 33.3431L311.676 46.8224L320.5 36.2678L329.324 46.8224L326.573 33.3431L340.326 33.0253L328.073 26.7715L336.4 15.8205Z"
        />
      </g>
      <mask
        id="rating-percentage-mask"
        style="mask-type: alpha"
        maskUnits="objectBoundingBox"
        x="0"
        y="0"
        width="100%"
        height="100%"
      >
        <rect id="target" :width="ratingPercentage" height="100%" fill="#C4C4C4" />
      </mask>
      <g mask="url(#rating-percentage-mask)" fill="white">
        <path
          d="M28.5 0L33.2233 18.692L50.7822 10.7305L39.1131 26.0776L56.2854 34.8418L37.011 35.2873L40.8657 54.1776L28.5 39.386L16.1343 54.1776L19.989 35.2873L0.714554 34.8418L17.8869 26.0776L6.2178 10.7305L23.7767 18.692L28.5 0Z"
        />
        <path
          d="M101.5 0L106.223 18.692L123.782 10.7305L112.113 26.0776L129.285 34.8418L110.011 35.2873L113.866 54.1776L101.5 39.386L89.1343 54.1776L92.989 35.2873L73.7146 34.8418L90.8869 26.0776L79.2178 10.7305L96.7767 18.692L101.5 0Z"
        />
        <path
          d="M174.5 0L179.223 18.692L196.782 10.7305L185.113 26.0776L202.285 34.8418L183.011 35.2873L186.866 54.1776L174.5 39.386L162.134 54.1776L165.989 35.2873L146.715 34.8418L163.887 26.0776L152.218 10.7305L169.777 18.692L174.5 0Z"
        />
        <path
          d="M247.5 0L252.223 18.692L269.782 10.7305L258.113 26.0776L275.285 34.8418L256.011 35.2873L259.866 54.1776L247.5 39.386L235.134 54.1776L238.989 35.2873L219.715 34.8418L236.887 26.0776L225.218 10.7305L242.777 18.692L247.5 0Z"
        />
        <path
          d="M320.5 0L325.223 18.692L342.782 10.7305L331.113 26.0776L348.285 34.8418L329.011 35.2873L332.866 54.1776L320.5 39.386L308.134 54.1776L311.989 35.2873L292.715 34.8418L309.887 26.0776L298.218 10.7305L315.777 18.692L320.5 0Z"
        />
      </g>
    </mask>
    <rect mask="url(#final-star-shape-mask)" width="100%" height="100%" x="0" y="0" fill="url(#fill-mask)" />
  </svg>
</template>

<script>
const mapRange = (value, inputMin, inputMax, outputMin, outputMax, clamp) => {
  // Reference:
  // https://openframeworks.cc/documentation/math/ofMath/
  if (Math.abs(inputMin - inputMax) < Number.EPSILON) {
    return outputMin;
  } else {
    var outVal = ((value - inputMin) / (inputMax - inputMin)) * (outputMax - outputMin) + outputMin;
    if (clamp) {
      if (outputMax < outputMin) {
        if (outVal < outputMax) outVal = outputMax;
        else if (outVal > outputMin) outVal = outputMin;
      } else {
        if (outVal > outputMax) outVal = outputMax;
        else if (outVal < outputMin) outVal = outputMin;
      }
    }
    return outVal;
  }
};

const clamp = (value, min, max) => {
  return min < max ? (value < min ? min : value > max ? max : value) : value < max ? max : value > min ? min : value;
};

export default {
  props: {
    colors: {
      type: Array,
      default: () => ['#333'],
    },
    rating: {
      type: Number,
      default: 5,
      required: false,
    },
  },
  computed: {
    ratingPercentage() {
      const normalizedVal = mapRange(this.rating, 0, 5, 0, 1);
      const starWidth = 57 / 349;
      const allStars = starWidth * 5;
      const allGaps = 1 - allStars;
      const gapWidth = allGaps / 4;

      return `${clamp((normalizedVal * allStars + (normalizedVal - 0.1) * (5 * gapWidth)) * 100, 0, 100)}%`;
    },
  },
  methods: {
    mapRange,
  },
};
</script>
