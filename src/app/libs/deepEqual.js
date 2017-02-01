export default function (arg1, arg2) {

  if (typeof arg1 === typeof arg2) {

    switch (typeof arg1) {

      case 'object': {

        if (arg1 === null) {
          return arg1 === arg2;
        } else {
          const keys1 = Object.keys(arg1);
          const keys2 = Object.keys(arg2);

          if (keys1.length === keys2.length && keys1.length === 0) {
            return true;
          }
        }

      };
      break;

      case 'array': {

        if(arg1.length === arg2.length && arg1.length === 0) {
          return true;
        }

      }
      break;

      default: {
        return arg1 === arg2;
      }
    }

  } else {

    return false;

  }
}