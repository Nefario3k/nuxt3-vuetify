<template>
  <div>
    <v-dialog
      overlay-color="var(--scrim)"
      :overlay-opacity="1"
      @click:outside="closeAll(1)"
      :persistent="persistent"
      :max-width="478"
      v-model="showModal"
      :width="width"
    >
      <v-card color="var(--text-dark)" class="modal_box">
        <div class="d-flex align-center w-100 h-100 justify-content-center">
          <div class="modal__content text-center">
            <ModalClose @closeModal="closeAll(1)" />
            <h3>Unsaved Changes</h3>
            <p class="sub_text">
              Are you sure you want to exit? <br />
              Note that all changes will not be saved!
            </p>
            <div class="button_area">
              <Button
                @action="closeAll(1)"
                :outlined="true"
                height="5rem"
                width="100%"
                textColor="var(--primary-color)"
                color="var(--primary-color)"
                text="Continue Edit"
              />
              <Button
                @action="closeAll(0)"
                height="5rem"
                width="100%"
                color="var(--primary-color)"
                text="Yes, Exit"
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
    };
  },
  methods: {
    refresh() {},
    showDialogue() {
      this.showModal = true;
    },
    closeAll(val) {
      this.showModal = false;
      this.$emit("closePanel", val);
    },
  },
};
</script>