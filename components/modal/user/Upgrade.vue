
<template>
  <div>
    <v-dialog
      overlay-color="var(--scrim)"
      :overlay-opacity="1"
      @click:outside="closeAll"
      :persistent="persistent"
      :max-width="478"
      v-model="showModal"
      :width="width"
    >
      <v-card color="var(--text-dark)" class="modal_box">
        <div class="d-flex align-center w-100 h-100 justify-content-center">
          <div v-if="!form" class="modal__content text-center">
            <ModalClose @closeModal="closeAll" />
            <h3>Upgrade User?</h3>
            <p class="sub_text">
              You are about to send an upgrade request of “John Doe” for Pro
              Plan - Monthly
            </p>
            <div class="button_area">
              <Button
                @action="form = true"
                height="5rem"
                width="100%"
                color="var(--primary-color)"
                text="Upgrade"
              />
            </div>
          </div>
          <div v-else class="modal__content text-center">
            <ModalClose @closeModal="closeAll" />
            <h3>Request Submitted</h3>
            <p class="sub_text">
              User upgrade request initiated and submitted successfully. Super
              Admin will process your request.
            </p>
            <div class="button_area">
              <Button
                @action="closeAll"
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
      form: false,
      showModal: false,
      width: "100%",
      persistent: false,
    };
  },
  methods: {
    refresh() {},
    showDialogue() {
      this.showModal = true;
      this.form = false;
    },
    closeAll() {
      this.showModal = false;
    },
  },
};
</script>