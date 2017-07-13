/**
* @license Licensed under the Apache License, Version 2.0 (the "License"):
*          http://www.apache.org/licenses/LICENSE-2.0
*/

/**
* @fileoverview Blocks for Distance Sensor of RoboCore Falcon Robot Library
*     The RoboCore Falcon Robot Library functions syntax can be
*     found in the following URL: https://github.com/RoboCore/FalconRobot
*     Note that this block uses the Blockly.FieldInstance instead of
*     Blockly.FieldDropdown which generates a unique instance per setup block
*     in the workspace.
*/

'use strict';

goog.provide('Blockly.Blocks.fr_line_sensor');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.fr_line_sensor.HUE = 250;

Blockly.Blocks['fr_line_sensor_config'] = {
 /**
  * Block for the line sensor generator configuration.
  * @this Blockly.Block
  */
 init: function() {
   this.setHelpUrl('http://arduino.cc/en/Reference/');
   this.setColour(Blockly.Blocks.fr_line_sensor.HUE);
  //  this.appendDummyInput()
  //      .appendField(new Blockly.FieldLabel(Blockly.Msg.FR_LINE_SENSOR_SETUP));

   this.appendDummyInput()
       .appendField(Blockly.Msg.FR_LINE_SENSOR_SETUP)
       .appendField(
           new Blockly.FieldInstance('FR_LINE_SENSOR',
                                     Blockly.Msg.FR_LINE_SENSOR_DEFAULT_NAME,
                                     true, true, false),
           'FR_LINE_SENSOR_NAME');

   this.appendDummyInput()
       .setAlign(Blockly.ALIGN_RIGHT)
       .appendField(Blockly.Msg.FR_LINE_SENSOR_PIN)
       .appendField(new Blockly.FieldDropdown(
           Blockly.Arduino.Boards.selected.digitalPins), 'FR_LINE_SENSOR_PIN');

   this.setTooltip(Blockly.Msg.FR_LINE_SENSOR_SETUP_TIP);
 },
 /**
  * Updates the content of the the pin related fields.
  * @this Blockly.Block
  */
 updateFields: function() {
   Blockly.Boards.refreshBlockFieldDropdown(
       this, 'FR_LINE_SENSOR_TRIGGER_PIN', 'digitalPins');
 }
};

Blockly.Blocks['fr_line_sensor_read'] = {
  /**
   * Block for read the line sensor pin value
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/');
    this.setColour(Blockly.Blocks.fr_line_sensor.HUE);
    // this.appendDummyInput()
    //     .appendField(new Blockly.FieldLabel(Blockly.Msg.FR_LINE_SENSOR_READ));
    this.appendDummyInput()
      .appendField(Blockly.Msg.FR_LINE_SENSOR_READ)
      .appendField(
        new Blockly.FieldInstance('FR_LINE_SENSOR',
                                  Blockly.Msg.FR_LINE_SENSOR_DEFAULT_NAME,
                                  false, true, false),
        'FR_LINE_SENSOR_NAME');

    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setOutput(true);
    this.setNextStatement(false);
    this.setTooltip(Blockly.Msg.FR_LINE_SENSOR_READ_TIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected line sensor instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('FR_LINE_SENSOR_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'FR_LINE_SENSOR', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid line sensor config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.FR_LINE_SENSOR).replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks['fr_line_sensor_check'] = {
  /**
   * Block will be true if a deviation from detectLevel is found; false otherwise
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/');
    this.setColour(Blockly.Blocks.fr_line_sensor.HUE);
    // this.appendDummyInput()
    //     .appendField(new Blockly.FieldLabel(Blockly.Msg.FR_LINE_SENSOR_CHECK));

    this.appendDummyInput()
      .appendField(Blockly.Msg.FR_LINE_SENSOR_CHECK)
      .appendField(
        new Blockly.FieldInstance('FR_LINE_SENSOR',
                                  Blockly.Msg.FR_LINE_SENSOR_DEFAULT_NAME,
                                  false, true, false),
        'FR_LINE_SENSOR_NAME');

    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setOutput(true);
    this.setNextStatement(false);
    this.setTooltip(Blockly.Msg.FR_LINE_SENSOR_CHECK_TIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected line sensor instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('FR_LINE_SENSOR_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'FR_LINE_SENSOR', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid line sensor config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.FR_LINE_SENSOR).replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks['fr_line_sensor_set_bg'] = {
  /**
   * Block for calibrate the sensor to detect a deviation
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/');
    this.setColour(Blockly.Blocks.fr_line_sensor.HUE);
    // this.appendDummyInput()
    //     .appendField(new Blockly.FieldLabel(Blockly.Msg.FR_LINE_SENSOR_SET_BG));

    this.appendDummyInput()
      .appendField(Blockly.Msg.FR_LINE_SENSOR_SET_BG)
      .appendField(
        new Blockly.FieldInstance('FR_LINE_SENSOR',
                                  Blockly.Msg.FR_LINE_SENSOR_DEFAULT_NAME,
                                  false, true, false),
        'FR_LINE_SENSOR_NAME');

    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setOutput(true);
    this.setNextStatement(false);
    this.setTooltip(Blockly.Msg.FR_LINE_SENSOR_SET_BG_TIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected line sensor instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('FR_LINE_SENSOR_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'FR_LINE_SENSOR', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid line sensor config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.FR_LINE_SENSOR).replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks['fr_line_sensor_set_detect'] = {
  /**
   * Block from detectLevel; these blocks allow for that.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/');
    this.setColour(Blockly.Blocks.fr_line_sensor.HUE);
    // this.appendDummyInput()
    //     .appendField(new Blockly.FieldLabel(Blockly.Msg.FR_LINE_SENSOR_SET_DETECT));

    this.appendDummyInput()
      .appendField(Blockly.Msg.FR_LINE_SENSOR_SET_DETECT)
      .appendField(
        new Blockly.FieldInstance('FR_LINE_SENSOR',
                                  Blockly.Msg.FR_LINE_SENSOR_DEFAULT_NAME,
                                  false, true, false),
        'FR_LINE_SENSOR_NAME');

    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setOutput(true);
    this.setNextStatement(false);
    this.setTooltip(Blockly.Msg.FR_LINE_SENSOR_SET_DETECT_TIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected line sensor instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('FR_LINE_SENSOR_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'FR_LINE_SENSOR', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid line sensor config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.FR_LINE_SENSOR).replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks['fr_line_sensor_cal_status'] = {
  /**
   * Block for check: Have both calibrated levels been set yet?
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/');
    this.setColour(Blockly.Blocks.fr_line_sensor.HUE);
    // this.appendDummyInput()
    //     .appendField(new Blockly.FieldLabel(Blockly.Msg.FR_LINE_SENSOR_CAL_STATUS));

    this.appendDummyInput()
      .appendField(Blockly.Msg.FR_LINE_SENSOR_CAL_STATUS)
      .appendField(
        new Blockly.FieldInstance('FR_LINE_SENSOR',
                                  Blockly.Msg.FR_LINE_SENSOR_DEFAULT_NAME,
                                  false, true, false),
        'FR_LINE_SENSOR_NAME');

    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setOutput(true);
    this.setNextStatement(false);
    this.setTooltip(Blockly.Msg.FR_LINE_SENSOR_CAL_STATUS_TIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected line sensor instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('FR_LINE_SENSOR_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'FR_LINE_SENSOR', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid line sensor config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.FR_LINE_SENSOR).replace(
                '%2', instanceName));
    }
  }
};
