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
          <div class="modal__content text-center">
            <ModalClose @closeModal="closeAll" />
            <h3>Suspend this User!</h3>
            <p class="sub_text">
              Are you sure you want to suspend this user? <br />
              Suspending this user means the user will temporarily not have
              access to his/her account and all the features
            </p>
            <!-- country -->
            <div class="mt-6">
              <label class="input_label" for="suspend_reson"
                >Select Reason</label
              >
              <select
                class="form-control select_field"
                id="suspend_reson"
                value="User uploaded a fake ID card"
              >
                <option value="User uploaded a fake ID card">
                  User uploaded a fake ID card
                </option>
                <option value="User needs some milk">
                  User needs some milk
                </option>
                <option value="User uploaded a fake ID card">
                  User uploaded a fake ID card
                </option>
              </select>
            </div>
            <div class="button_area">
              <Button
                @action="closeAll"
                :outlined="true"
                height="5rem"
                width="100%"
                textColor="var(--primary-color)"
                color="var(--primary-color)"
                text="Cancel"
              />
              <Button
                @action="closeAll"
                height="5rem"
                width="100%"
                color="var(--primary-color)"
                text="Suspend"
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
    closeAll() {
      this.showModal = false;
    },
  },
};
</script>