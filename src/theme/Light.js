let Colors = {};

// color functions
Colors.rgba = (r,g,b,a) => `rgba(${r}, ${g}, ${b}, ${a})`;
Colors.rgb = (r,g,b) => Colors.rgba(r,g,b,1);
Colors.gray = (v, a) => Colors.rgba(v,v,v, a || 1);

// constant colors
Colors.primary = '#2196f3';
Colors.primary2 = '#42a5f5';
Colors.primary3 = '#64b5f6';
Colors.primary4 = '#90caf9';
Colors.primary5 = '#bbdefb';
Colors.primary6 = '#e3f2fd';
Colors.greyscale1 = '#212121';
Colors.greyscale2 = '#424242';
Colors.greyscale3 = '#757575';
Colors.greyscale4 = '#9e9e9e';
Colors.greyscale5 = '#bdbdbd';
Colors.greyscale6 = '#eeeeee';
Colors.white = '#fafafa';
Colors.black = '#010101';
Colors.danger = '#f44336';
Colors.success = '#81c784';
Colors.success1 = '#A5D6A7';
Colors.success2 = '#C8E6C9';
Colors.success3 = '#E8F5E9';
Colors.warning = '#FFEE58';
Colors.warning1 = '#FFF176';
Colors.warning2 = '#FFF59D';
Colors.warning3 = '#FFFDE7';
Colors.google = '#db3236';


// variable colors
Colors.dark = Colors.greyscale1;
Colors.negative = Colors.greyscale3;
Colors.light = Colors.greyscale6;
Colors.bg1 = Colors.white;
Colors.bg2 = Colors.greyscale6;
Colors.bg3 = Colors.greyscale5;
Colors.text1 = Colors.greyscale1;
Colors.text2 = Colors.greyscale4;
Colors.text3 = Colors.greyscale2;

// react navigation colors
Colors.background = Colors.bg1
Colors.card = Colors.bg1
Colors.text = Colors.text1
Colors.border = Colors.negative
Colors.notification = Colors.danger

export default Colors;
