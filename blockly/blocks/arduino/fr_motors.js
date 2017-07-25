/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for Motors of RoboCore Falcon Robot Library
 *     The RoboCore Falcon Robot Library functions syntax can be
 *     found in the following URL: https://github.com/RoboCore/FalconRobot
 *     Note that this block uses the Blockly.FieldInstance instead of
 *     Blockly.FieldDropdown which generates a unique instance per setup block
 *     in the workspace.
 */

/**
 * Created by RoboCore
 * Based on Blockly.Blocks.stteper
 */

'use strict';

goog.provide('Blockly.Blocks.fr_motors');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.fr_motors.HUE = 100;


Blockly.Blocks['fr_motors_config'] = {
  /**
   * Block for the Motors generator configuration.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://github.com/RoboCore/FalconRobot');

    this.setColour(Blockly.Blocks.fr_motors.HUE);

    this.appendDummyInput()
        .appendField(new Blockly.FieldLabel(Blockly.Msg.FR_MOTORS_SETUP));
    //     .appendField(
    //         new Blockly.FieldInstance(Blockly.Msg.FR_MOTORS,
    //                                   Blockly.Msg.FR_MOTORS_DEFAULT_NAME,
    //                                   true, true, false),
    //         'FR_MOTOR_NAME');

    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.FR_MOTORS_SPEED_PIN_1)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'FR_MOTORS_SPEED_PIN_1');

    this.setTooltip(Blockly.Msg.FR_MOTORS_SETUP_TIP);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.FR_MOTORS_SPEED_PIN_2)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'FR_MOTORS_SPEED_PIN_2');

    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.FR_MOTORS_DIRECTION_PIN_1)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'FR_MOTORS_DIRECTION_PIN_1');

    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.FR_MOTORS_DIRECTION_PIN_2)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'FR_MOTORS_DIRECTION_PIN_2');

    this.setTooltip(Blockly.Msg.FR_MOTORS_SETUP_TIP);

  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Boards.refreshBlockFieldDropdown(
        this, 'FR_MOTORS_SPEED_PIN_1', 'digitalPins');
    Blockly.Boards.refreshBlockFieldDropdown(
        this, 'FR_MOTORS_SPEED_PIN_2', 'digitalPins');
    Blockly.Boards.refreshBlockFieldDropdown(
        this, 'FR_MOTORS_DIRECTION_PIN_1', 'digitalPins');
    Blockly.Boards.refreshBlockFieldDropdown(
        this, 'FR_MOTORS_DIRECTION_PIN_2', 'digitalPins');
  }
};

Blockly.Blocks['fr_motors_stop'] = {
  /**
   * Block for set the motor direction and speed.
   * @this Blockly.Block
   */
  init: function() {

    this.setHelpUrl('https://github.com/RoboCore/FalconRobot');
    this.setColour(Blockly.Blocks.fr_motors.HUE);

    this.appendDummyInput()
      .appendField(new Blockly.FieldLabel(Blockly.Msg.FR_MOTORS_STOP));

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.FR_MOTORS_STOP_TIP);
  }
};

Blockly.Blocks['fr_motors_stop_left'] = {
  /**
   * Block for set the motor direction and speed.
   * @this Blockly.Block
   */
  init: function() {

    this.setHelpUrl('https://github.com/RoboCore/FalconRobot');
    this.setColour(Blockly.Blocks.fr_motors.HUE);

    this.appendDummyInput()
      .appendField(new Blockly.FieldLabel(Blockly.Msg.FR_MOTORS_STOP_LEFT));

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.FR_MOTORS_STOP_LEFT_TIP);
  }
};

Blockly.Blocks['fr_motors_stop_right'] = {
  /**
   * Block for set the motor direction and speed.
   * @this Blockly.Block
   */
  init: function() {

    this.setHelpUrl('https://github.com/RoboCore/FalconRobot');
    this.setColour(Blockly.Blocks.fr_motors.HUE);

    this.appendDummyInput()
      .appendField(new Blockly.FieldLabel(Blockly.Msg.FR_MOTORS_STOP_RIGHT));

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.FR_MOTORS_STOP_TIP_RIGHT);
  }
};

Blockly.Blocks['fr_motors_drive'] = {
  /**
   * Block for set the motor direction and speed.
   * @this Blockly.Block
   */
  init: function() {

    var FR_DIRECTIONS = [
        [Blockly.Msg.FR_MOTORS_DIRECTION_FORWARD, 'FORWARD'],
        [Blockly.Msg.FR_MOTORS_DIRECTION_BACKWARD, 'BACKWARD']
    ];

    this.setHelpUrl('https://github.com/RoboCore/FalconRobot');
    this.setColour(Blockly.Blocks.fr_motors.HUE);

    this.appendDummyInput()
      .appendField(Blockly.Msg.FR_MOTORS_DRIVE)
      .appendField(Blockly.Msg.FR_MOTORS_DRIVE_DIRECTION)
      .appendField(new Blockly.FieldDropdown(FR_DIRECTIONS), "FR_MOTORS_DIRECTION");

    this.appendValueInput('FR_MOTORS_SPEED')
      .setCheck(Blockly.Types.NUMBER.checkList)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FR_MOTORS_DRIVE_SPEED);

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.FR_MOTORS_DRIVE_TIP);
  }
};

Blockly.Blocks['fr_motors_drive_delay'] = {
  /**
   * Block for set the motor direction and speed.
   * @this Blockly.Block
   */
  init: function() {

    var FR_DIRECTIONS = [
        [Blockly.Msg.FR_MOTORS_DIRECTION_FORWARD, 'FORWARD'],
        [Blockly.Msg.FR_MOTORS_DIRECTION_BACKWARD, 'BACKWARD']
    ];

    this.setHelpUrl('https://github.com/RoboCore/FalconRobot');
    this.setColour(Blockly.Blocks.fr_motors.HUE);

    this.appendDummyInput()
      .appendField(Blockly.Msg.FR_MOTORS_DRIVE)
      .appendField(Blockly.Msg.FR_MOTORS_DRIVE_DIRECTION)
      .appendField(new Blockly.FieldDropdown(FR_DIRECTIONS), "FR_MOTORS_DIRECTION");

    this.appendValueInput('FR_MOTORS_SPEED')
      .setCheck(Blockly.Types.NUMBER.checkList)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FR_MOTORS_DRIVE_SPEED);

    this.appendValueInput('FR_MOTORS_DELAY')
      .setCheck(Blockly.Types.NUMBER.checkList)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FR_MOTORS_DRIVE_DELAY);


    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.FR_MOTORS_DRIVE_DELAY_TIP);
  }
};

Blockly.Blocks['fr_motors_pivot'] = {
  /**
   * Block for set the motor direction and speed.
   * @this Blockly.Block
   */
  init: function() {

    var FR_DIRECTIONS = [
        [Blockly.Msg.FR_MOTORS_DIRECTION_RIGHT, 'RIGHT'],
        [Blockly.Msg.FR_MOTORS_DIRECTION_LEFT, 'LEFT']
    ];

    this.setHelpUrl('https://github.com/RoboCore/FalconRobot');
    this.setColour(Blockly.Blocks.fr_motors.HUE);

    this.appendDummyInput()
      .appendField(Blockly.Msg.FR_MOTORS_PIVOT)
      .appendField(Blockly.Msg.FR_MOTORS_PIVOT_DIRECTION)
      .appendField(new Blockly.FieldDropdown(FR_DIRECTIONS), "FR_MOTORS_DIRECTION");

    this.appendValueInput('FR_MOTORS_SPEED')
      .setCheck(Blockly.Types.NUMBER.checkList)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FR_MOTORS_PIVOT_SPEED);

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.FR_MOTORS_PIVOT_TIP);
  }
};

Blockly.Blocks['fr_motors_pivot_delay'] = {
  /**
   * Block for set the motor direction and speed.
   * @this Blockly.Block
   */
  init: function() {

    var FR_DIRECTIONS = [
        [Blockly.Msg.FR_MOTORS_DIRECTION_RIGHT, 'RIGHT'],
        [Blockly.Msg.FR_MOTORS_DIRECTION_LEFT, 'LEFT']
    ];

    this.setHelpUrl('https://github.com/RoboCore/FalconRobot');
    this.setColour(Blockly.Blocks.fr_motors.HUE);

    this.appendDummyInput()
      .appendField(Blockly.Msg.FR_MOTORS_PIVOT)
      .appendField(Blockly.Msg.FR_MOTORS_PIVOT_DIRECTION)
      .appendField(new Blockly.FieldDropdown(FR_DIRECTIONS), "FR_MOTORS_DIRECTION");

    this.appendValueInput('FR_MOTORS_SPEED')
      .setCheck(Blockly.Types.NUMBER.checkList)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FR_MOTORS_PIVOT_SPEED);

    this.appendValueInput('FR_MOTORS_DELAY')
      .setCheck(Blockly.Types.NUMBER.checkList)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FR_MOTORS_PIVOT_DELAY);

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.FR_MOTORS_PIVOT_DELAY_TIP);
  }
};

Blockly.Blocks['fr_motors_drive_left'] = {
  /**
   * Block for set the motor direction and speed.
   * @this Blockly.Block
   */
  init: function() {

    var FR_DIRECTIONS = [
        [Blockly.Msg.FR_MOTORS_DIRECTION_FORWARD, 'FORWARD'],
        [Blockly.Msg.FR_MOTORS_DIRECTION_BACKWARD, 'BACKWARD']
    ];

    this.setHelpUrl('https://github.com/RoboCore/FalconRobot');
    this.setColour(Blockly.Blocks.fr_motors.HUE);

    this.appendDummyInput()
      .appendField(Blockly.Msg.FR_MOTORS_DRIVE_LEFT)
      .appendField(Blockly.Msg.FR_MOTORS_DRIVE_DIRECTION)
      .appendField(new Blockly.FieldDropdown(FR_DIRECTIONS), "FR_MOTORS_DIRECTION");

    this.appendValueInput('FR_MOTORS_SPEED')
      .setCheck(Blockly.Types.NUMBER.checkList)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FR_MOTORS_DRIVE_SPEED);

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.FR_MOTORS_DRIVE_LEFT_DELAY_TIP);
  }
};

Blockly.Blocks['fr_motors_drive_left_delay'] = {
  /**
   * Block for set the motor direction and speed.
   * @this Blockly.Block
   */
  init: function() {

    var FR_DIRECTIONS = [
        [Blockly.Msg.FR_MOTORS_DIRECTION_FORWARD, 'FORWARD'],
        [Blockly.Msg.FR_MOTORS_DIRECTION_BACKWARD, 'BACKWARD']
    ];

    this.setHelpUrl('https://github.com/RoboCore/FalconRobot');
    this.setColour(Blockly.Blocks.fr_motors.HUE);

    this.appendDummyInput()
      .appendField(Blockly.Msg.FR_MOTORS_DRIVE_LEFT)
      .appendField(Blockly.Msg.FR_MOTORS_DRIVE_DIRECTION)
      .appendField(new Blockly.FieldDropdown(FR_DIRECTIONS), "FR_MOTORS_DIRECTION");

    this.appendValueInput('FR_MOTORS_SPEED')
      .setCheck(Blockly.Types.NUMBER.checkList)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FR_MOTORS_DRIVE_SPEED);

    this.appendValueInput('FR_MOTORS_DELAY')
      .setCheck(Blockly.Types.NUMBER.checkList)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FR_MOTORS_DRIVE_DELAY);


    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.FR_MOTORS_DRIVE_LEFT_DELAY_TIP);
  }
};

Blockly.Blocks['fr_motors_drive_right'] = {
  /**
   * Block for set the motor direction and speed.
   * @this Blockly.Block
   */
  init: function() {

    var FR_DIRECTIONS = [
        [Blockly.Msg.FR_MOTORS_DIRECTION_FORWARD, 'FORWARD'],
        [Blockly.Msg.FR_MOTORS_DIRECTION_BACKWARD, 'BACKWARD']
    ];

    this.setHelpUrl('https://github.com/RoboCore/FalconRobot');
    this.setColour(Blockly.Blocks.fr_motors.HUE);

    this.appendDummyInput()
      .appendField(Blockly.Msg.FR_MOTORS_DRIVE_RIGHT)
      .appendField(Blockly.Msg.FR_MOTORS_DRIVE_DIRECTION)
      .appendField(new Blockly.FieldDropdown(FR_DIRECTIONS), "FR_MOTORS_DIRECTION");

    this.appendValueInput('FR_MOTORS_SPEED')
      .setCheck(Blockly.Types.NUMBER.checkList)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FR_MOTORS_DRIVE_SPEED);

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.FR_MOTORS_DRIVE_RIGHT_DELAY_TIP);
  }
};

Blockly.Blocks['fr_motors_drive_right_delay'] = {
  /**
   * Block for set the motor direction and speed.
   * @this Blockly.Block
   */
  init: function() {

    var FR_DIRECTIONS = [
        [Blockly.Msg.FR_MOTORS_DIRECTION_FORWARD, 'FORWARD'],
        [Blockly.Msg.FR_MOTORS_DIRECTION_BACKWARD, 'BACKWARD']
    ];

    this.setHelpUrl('https://github.com/RoboCore/FalconRobot');
    this.setColour(Blockly.Blocks.fr_motors.HUE);

    this.appendDummyInput()
      .appendField(Blockly.Msg.FR_MOTORS_DRIVE_RIGHT)
      .appendField(Blockly.Msg.FR_MOTORS_DRIVE_DIRECTION)
      .appendField(new Blockly.FieldDropdown(FR_DIRECTIONS), "FR_MOTORS_DIRECTION");

    this.appendValueInput('FR_MOTORS_SPEED')
      .setCheck(Blockly.Types.NUMBER.checkList)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FR_MOTORS_DRIVE_SPEED);

    this.appendValueInput('FR_MOTORS_DELAY')
      .setCheck(Blockly.Types.NUMBER.checkList)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FR_MOTORS_DRIVE_DELAY);


    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.FR_MOTORS_DRIVE_RIGHT_DELAY_TIP);
  }
};
