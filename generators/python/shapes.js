'use strict';

goog.provide('Blockly.Python.shapes');

goog.require('Blockly.Python');


///////////////////////////////////////////////////////////////////////////////


//------------------------------Prototype------------------------------------//


///////////////////////////////////////////////////////////////////////////////




Blockly.Python.Shape = function(block) {
  
  var code = block.info.name + '(';
  var previousArg = false;
  //loop through shapes xml to find which attributes
  for (var attribute in block.hasXml) {
    if (block.hasXml[attribute]) {
      //special case for make_trail
      if(attribute === 'make_trail') {
        if (previousArg) {
          code = code + ', make_trail=' + 
          Blockly.Python.valueToCode(block,
                                     attribute.toUpperCase(),
                                     Blockly.Python.ORDER_ATOMIC) + 
          ', retain=' + block.getFieldValue("RETAIN_VALUE");
        } else {
          code = code + 'make_trail=' + 
          Blockly.Python.valueToCode(block,
                                     attribute.toUpperCase(),
                                     Blockly.Python.ORDER_ATOMIC) + 
          ', retain=' + block.getFieldValue("RETAIN_VALUE");
        }
      } else {
        if (previousArg) {
          code = code + ', ' + attribute + '=' + 
          Blockly.Python.valueToCode(block,
                                     attribute.toUpperCase(),
                                     Blockly.Python.ORDER_ATOMIC);
        } else {
          code = code + attribute + '=' + 
          Blockly.Python.valueToCode(block,
                                     attribute.toUpperCase(),
                                     Blockly.Python.ORDER_ATOMIC);
          previousArg = true;
        }
      }
    }
  }
  code = code + ')\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};


///////////////////////////////////////////////////////////////////////////////


//--------------------------3D Objects Blocks--------------------------------//


///////////////////////////////////////////////////////////////////////////////



Blockly.Python['vpython_helix'] = Blockly.Python.Shape;


Blockly.Python['vpython_arrow'] = Blockly.Python.Shape;


Blockly.Python['vpython_cylinder'] = Blockly.Python.Shape;


Blockly.Python['vpython_ring'] = Blockly.Python.Shape;


Blockly.Python['vpython_sphere'] = Blockly.Python.Shape;


Blockly.Python['vpython_box'] = Blockly.Python.Shape;
