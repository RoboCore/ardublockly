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

 goog.provide('Blockly.Blocks.fr_distance_sensor');

 goog.require('Blockly.Blocks');
 goog.require('Blockly.Types');

 /** Common HSV hue for all blocks in this category. */
 Blockly.Blocks.fr_distance_sensor.HUE = 200;

Blockly.Blocks['fr_distance_sensor_config'] = {
  /**
   * Block for the ultrasonic generator configuration.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/');
    this.setColour(Blockly.Blocks.fr_distance_sensor.HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabel(Blockly.Msg.FR_DISTANCE_SENSOR_SETUP));

    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.FR_DISTANCE_SENSOR_ECHO_PIN)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'FR_DISTANCE_SENSOR_ECHO_PIN')
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.FR_DISTANCE_SENSOR_TRIGGER_PIN)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'FR_DISTANCE_SENSOR_TRIGGER_PIN');
    this.setTooltip(Blockly.Msg.FR_DISTANCE_SENSOR_SETUP_TIP);
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Boards.refreshBlockFieldDropdown(
        this, 'FR_DISTANCE_SENSOR_TRIGGER_PIN', 'digitalPins');
    Blockly.Boards.refreshBlockFieldDropdown(
        this, 'FR_DISTANCE_SENSOR_ECHO_PIN', 'digitalPins');
  }
};

Blockly.Blocks['fr_distance_sensor_read_cm'] = {
  /**
   * Block for read the distance in cm.
   * @this Blockly.Block
   */
  init: function() {
      this.setHelpUrl('http://arduino.cc/en/Reference/');
      this.setColour(Blockly.Blocks.fr_distance_sensor.HUE);
      this.appendDummyInput()
          .appendField(new Blockly.FieldLabel(Blockly.Msg.FR_DISTANCE_SENSOR_READ_CM));

    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setOutput(true);
    this.setNextStatement(false);
    this.setTooltip(Blockly.Msg.FR_DISTANCE_SENSOR_READ_CM_TIP);
  }
};

Blockly.Blocks['fr_distance_sensor_read_inch'] = {
  /**
   * Block for read the distance in cm.
   * @this Blockly.Block
   */
  init: function() {
      this.setHelpUrl('http://arduino.cc/en/Reference/');
      this.setColour(Blockly.Blocks.fr_distance_sensor.HUE);
      this.appendDummyInput()
          .appendField(new Blockly.FieldLabel(Blockly.Msg.FR_DISTANCE_SENSOR_READ_INCH));

    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setOutput(true);
    this.setNextStatement(false);
    this.setTooltip(Blockly.Msg.FR_DISTANCE_SENSOR_READ_INCH_TIP);
  }
};
