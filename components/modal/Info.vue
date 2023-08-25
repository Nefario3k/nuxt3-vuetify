<template>
  <div>
    <v-dialog
      overlay-color="var(--scrim)"
      :overlay-opacity="1"
      @click:outside="closeAll(0)"
      :persistent="persistent"
      :max-width="478"
      v-model="showModal"
      :width="width"
    >
      <v-card color="var(--text-dark)" class="modal_box">
        <div class="d-flex align-center w-100 h-100 justify-content-center">
          <div class="modal__content text-center">
            <ModalClose @closeModal="closeAll(0)" />
            <h3>{{ info_stat.head }}</h3>
            <p class="sub_text">{{ info_stat.sub }}</p>
            <div class="button_area">
              <Button
                @action="closeAll(0)"
                :outlined="true"
                height="5rem"
                width="100%"
                textColor="var(--primary-color)"
                color="var(--primary-color)"
                text="Close"
              />
            </div>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      width: "100%",
      persistent: false,
      info_stat: {
        head: "",
        sub: "",
      },
    };
  },
  methods: {
    refresh() {},
    showDialogue(val) {
      if (val) {
        this.info_stat = { ...this.info_stat, ...val };
      }
      this.showModal = true;
    },
    closeAll(val) {
      this.showModal = false;
      this.$emit("closePanel", val);
    },
  },
};
</script>