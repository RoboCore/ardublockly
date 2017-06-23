/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for Arduino Motor Control
 *     The Arduino Motor functions syntax can be found in the following URL:
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

goog.provide('Blockly.Blocks.motor');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.motor.HUE = 100;

Blockly.Blocks['motor_config'] = {
  /**
   * Block for the motor generator configuration.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/');
    this.setColour(Blockly.Blocks.motor.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_MOTOR_SETUP)
        .appendField(
            new Blockly.FieldInstance('Motor',
                                      Blockly.Msg.ARD_MOTOR_DEFAULT_NAME,
                                      true, true, false),
            'MOTOR_NAME');
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_MOTOR_DIRECTION_PIN)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'MOTOR_DIRECTION_PIN');
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_MOTOR_SPEED_PIN)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'MOTOR_SPEED_PIN')
    this.setTooltip(Blockly.Msg.ARD_MOTOR_SETUP_TIP);
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Boards.refreshBlockFieldDropdown(
        this, 'MOTOR_DIRECTION_PIN', 'digitalPins');
    Blockly.Boards.refreshBlockFieldDropdown(
        this, 'MOTOR_SPEED_PIN', 'digitalPins');
  }
};

Blockly.Blocks['motor_set'] = {
  /**
   * Block for set the motor direction and speed.
   * @this Blockly.Block
   */
  init: function() {
    var DIRECTIONS = [
        [Blockly.Msg.ARD_MOTOR_DIRECTION_FORWARD, 'FORWARD'],
        [Blockly.Msg.ARD_MOTOR_DIRECTION_BACKWARD, 'BACKWARD']
      ];

      this.setHelpUrl('http://arduino.cc/en/Reference/');
      this.setColour(Blockly.Blocks.motor.HUE);
      this.appendDummyInput()
          .appendField(Blockly.Msg.ARD_MOTOR_SET)
          .appendField(
              new Blockly.FieldInstance('Motor',
                                        Blockly.Msg.ARD_MOTOR_DEFAULT_NAME,
                                        false, true, false),
              'MOTOR_NAME')
          .appendField(Blockly.Msg.ARD_MOTOR_SET_DIRECTION)
          .appendField(new Blockly.FieldDropdown(DIRECTIONS), 'MOTOR_DIRECTION');


      this.appendValueInput('MOTOR_SPEED')
          .setCheck(Blockly.Types.NUMBER.checkList)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(Blockly.Msg.ARD_MOTOR_SET_SPEED);

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.ARD_MOTOR_SET_TIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected motor instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('MOTOR_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'Motor', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid motor config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.ARD_MOTOR_COMPONENT).replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks['motor_set_direction'] = {
  /**
   * Block for set the motor direction.
   * @this Blockly.Block
   */
  init: function() {
    var DIRECTIONS = [
        [Blockly.Msg.ARD_MOTOR_DIRECTION_FORWARD, 'FORWARD'],
        [Blockly.Msg.ARD_MOTOR_DIRECTION_BACKWARD, 'BACKWARD']
      ];

    this.setHelpUrl('http://arduino.cc/en/Reference/');
    this.setColour(Blockly.Blocks.motor.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_MOTOR_SET)
        .appendField(
            new Blockly.FieldInstance('Motor',
                                      Blockly.Msg.ARD_MOTOR_DEFAULT_NAME,
                                      false, true, false),
            'MOTOR_NAME')
        .appendField(Blockly.Msg.ARD_MOTOR_SET_DIRECTION)
        .appendField(new Blockly.FieldDropdown(DIRECTIONS), 'MOTOR_DIRECTION');

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.ARD_MOTOR_SET_DIRECTION_TIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected motor instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('MOTOR_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'Motor', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid motor config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.ARD_MOTOR_COMPONENT).replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks['motor_set_speed'] = {
  /**
   * Block for set the motor speed.
   * @this Blockly.Block
   */
  init: function() {

    this.setHelpUrl('http://arduino.cc/en/Reference/');
    this.setColour(Blockly.Blocks.motor.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_MOTOR_SET)
        .appendField(
            new Blockly.FieldInstance('Motor',
                                      Blockly.Msg.ARD_MOTOR_DEFAULT_NAME,
                                      false, true, false),
            'MOTOR_NAME');

    this.appendValueInput('MOTOR_SPEED')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_MOTOR_SET_SPEED);

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.ARD_MOTOR_SET_SPEED_TIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected motor instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('MOTOR_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'Motor', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid motor config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.ARD_MOTOR_COMPONENT).replace(
                '%2', instanceName));
    }
  }
};
