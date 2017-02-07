<template>
  <div class="container" :style="{height: heightContainer+'px'}">
    <slot v-for="(photo, index) in photos">
    <img :src="`http://fex.net/show/858909646169/${photo.upload_id}?400h`"
         :alt="photo.name" 
         :class="{active: photo.active}"
         :style="{
           width: positions[index].width+'px', 
           height: positions[index].height+'px',
           
        }"
        :row="computeRow(positions[index].y)"
        @click="openPreview(computeRow(positions[index].y), index)">
  
      <slot v-if="((index+1 != photos.length) && computeRow(positions[index+1].y) > computeRow(positions[index].y)) || photos.length-1 == index">
        <transition name="preview-trans">
          <div class="preview" v-if="currentPreview == 'lastItem-'+computeRow(positions[index].y)">
            <img :src="currentPreviewSrc">
          </div>
        </transition>
      </slot>  
  </slot>
  </div>
</template>

<style scoped>
  .container {
    margin: 20px;
    position: relative;
  }
  
  .container > img {
    position: relative;
    display: block;
    float: left;
    margin-right: 1px;
    margin-top: 1px;
  }
  
  .preview {
    height: 400px;
    float: left;
    width: 100%;
    background: #333;
    margin: 2px 0 1px 0;
    overflow: hidden;
  }
  
  .container > img:hover {
    opacity: .7;
  }
  
  .container .active {
    opacity: .6;
  }
  
  .preview-trans-enter-active, .preview-trans-leave-active {
      transition: height .5s;
    }
    .preview-trans-enter {
      height: 0;
    }
    
    .preview-trans-leave-to {
      height: 400px;
    }
</style>
<!-- 

top: positions[index].y+'px',
left: positions[index].x+'px'

 -->

<script>
import Layout from './fixad-partition'
  
export default {
  created() {
    
  },
  
  computed: {
    clientWidth: function() {
      return this.widthContainer;
    }
  },
  
  data () {
    return {
      photos: [],
      positions: [],
      heightContainer: 0,
      widthContainer: 0,
      currentPreview: null,
      currentPreviewSrc: 'javascript:;',
      currentActiveIndex: null,
    }
  },
  
  mounted() {
    this.widthContainer = this.$el.clientWidth
    
    this.fetchPhotos();
    
    window.addEventListener('resize', () => {
      this.widthContainer = this.$el.clientWidth;
      
      let elements = Layout(this.photos, {
          containerWidth: this.widthContainer || 5,
          idealElementHeight: 120,
          spacing: 2
      });
      
      this.positions = elements.positions;
      this.heightContainer = elements.height;
    });
  },
  
  methods: {
    fetchPhotos() {
      this.$http.get('/static/photos.json').then(response => {
        let photos = response.data.upload_list.filter(el => el.magick == 'jpeg');
        photos = photos.map(el => {
          el.active = false;
          return el;
        });
        
        let elements = Layout(photos, {
            containerWidth: this.widthContainer,
            idealElementHeight: 130,
            spacing: 2
        });
        
        this.photos = photos;
        this.positions = elements.positions;
        this.heightContainer = elements.height;
        this.widthContainer = elements.width;
      });
    },
    
    computeRow(y = 0) {
      return (y-(y%100))/100;
    },
    
    openPreview(row, index) {
      
      // close preview
      if(this.currentActiveIndex === index) {
        this.currentPreview = null;
        this.currentActiveIndex = null;
        this.photos[this.currentActiveIndex].active = false;
        return;
      }
      
      this.currentPreview = `lastItem-${row}`;
      if(this.currentActiveIndex !== null) this.photos[this.currentActiveIndex].active = false;
      this.currentActiveIndex = index;
      this.photos[this.currentActiveIndex].active = true;
      this.currentPreviewSrc = `http://fex.net/show/858909646169/${this.photos[this.currentActiveIndex].upload_id}?400h`
    }
  }
}

// :ref="(photos.length != index+1) && computeRow(positions[index+1].y) > computeRow(positions[index].y) ? 'lastItem-'+computeRow(positions[index].y) : ''"
</script>