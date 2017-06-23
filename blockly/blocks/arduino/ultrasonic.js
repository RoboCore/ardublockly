/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for Arduino Ultrasonic Sensor Read
 *     The Arduino Ultrasonic functions syntax can be found in the following URL:
 *     http://arduino.cc/en/Reference/
 *     Note that this block uses the Blockly.FieldInstance instead of
 *     Blockly.FieldDropdown which generates a unique instance per setup block
 *     in the workspace.
 */

/**
 * Created by RoboCore
 * Based on Blockly.Blocks.stteper
 */

'use strict';

goog.provide('Blockly.Blocks.ultrasonic');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.ultrasonic.HUE = 60;

Blockly.Blocks['ultrasonic_config'] = {
  /**
   * Block for the ultrasonic generator configuration.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/');
    this.setColour(Blockly.Blocks.ultrasonic.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_ULTRASONIC_SETUP)
        .appendField(
            new Blockly.FieldInstance('Ultrasonic',
                                      Blockly.Msg.ARD_ULTRASONIC_DEFAULT_NAME,
                                      true, true, false),
            'ULTRASONIC_NAME');
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_ULTRASONIC_TRIGGER_PIN)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'ULTRASONIC_TRIGGER_PIN');
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_ULTRASONIC_ECHO_PIN)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'ULTRASONIC_ECHO_PIN')
    this.setTooltip(Blockly.Msg.ARD_ULTRASONIC_SETUP_TIP);
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Boards.refreshBlockFieldDropdown(
        this, 'ULTRASONIC_TRIGGER_PIN', 'digitalPins');
    Blockly.Boards.refreshBlockFieldDropdown(
        this, 'ULTRASONIC_ECHO_PIN', 'digitalPins');
  }
};

Blockly.Blocks['ultrasonic_read'] = {
  /**
   * Block for read the ultrasonic distance.
   * @this Blockly.Block
   */
  init: function() {
      this.setHelpUrl('http://arduino.cc/en/Reference/');
      this.setColour(Blockly.Blocks.ultrasonic.HUE);
      this.appendDummyInput()
          .appendField(Blockly.Msg.ARD_ULTRASONIC_READ)
          .appendField(
              new Blockly.FieldInstance('Ultrasonic',
                                        Blockly.Msg.ARD_ULTRASONIC_DEFAULT_NAME,
                                        false, true, false),
              'ULTRASONIC_NAME');

    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setOutput(true);
    this.setNextStatement(false);
    this.setTooltip(Blockly.Msg.ARD_ULTRASONIC_READ_TIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected ultrasonic instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('ULTRASONIC_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'Ultrasonic', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid ultrasonic config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.ARD_ULTRASONIC_COMPONENT).replace(
                '%2', instanceName));
    }
  }
};
