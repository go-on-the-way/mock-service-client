import * as _ from 'lodash';
import { Observable } from 'rxjs';

export class CustomTool {
  constructor() { }

  /**
   * 防抖函数生成器
   * @param fn 回调函数
   * @param time 间隔时间
   * @param context 执行上下文
   */
  public static debounceFn(fn, time, context) {
    let timerId;
    return (...values) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {// 防多次调用
        fn.apply(context, values);
      }, time);
    };
  }

  /**
   * 小写数字转换成大写, 只处理到[0 ~ 99]
   * @param num 输入数字
   */
  public static numberToChineseNumber(num: number) {
    if (isNaN(Number(num))) {
      return '';
    }
    const chineseNumber = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '百', '千', '万', '亿'];
    const length = String(num).length;
    if (length === 1) {
      return chineseNumber[num];
    } else if (length === 2) {
      if (num === 10) {
        return chineseNumber[num];
      } else if (num > 10 && num < 20) {
        return '十' + chineseNumber[String(num).charAt(1)];
      } else {
        return chineseNumber[String(num).charAt(0)] + '十' + chineseNumber[String(num).charAt(1)].replace('零', '');
      }
    }
  }

  /**
   * 1-26转换成大写字母
   * @param num 输入数字
   */
  public static numberToUpperCase(num: number) {
    num = Number(num);
    if (num < 1 || num > 26) {
      return '--';
    }
    return String.fromCharCode(64 + num);
  }

  /**
   * 大写字母转数字
   * @param str 输入字符串
   */
  public static upperCaseToNumber(str: string) {
    str = str.replace(/[^A-Z]/g, '');
    return str.charCodeAt(0) - 64;
  }

  /**
   * 数组字符串转数组"[121313132,12312313]"->[121313132,12312313]
   * @param arrAtr 数组字符串
   */
  public static arrStrToArr(arrAtr: string) {
    let arr = [];
    if (arrAtr) {
      arr = arrAtr.replace(/\[/, '').replace(/\]/, '').split(',');
      arr = arr.map(ele => {
        return ele.trim(); // 去掉两侧的空格
      });
    }
    return arr;
  }

  /**
   * 基于lodash
   * 深度比较两个对象的差异并返回差异的部分
   * @param object 被比较对象
   * @param base 比较对象
   */
  public static differenceObj(object, base) {
    function changes(des, source) {
      return _.transform(object, (result, value, key) => {
        if (!_.isEqual(value, base[key])) {
          result[key] = (_.isObject(value) && _.isObject(base[key])) ? changes(value, base[key]) : value;
        }
      });
    }
    return changes(object, base);
  }

  /**
   * base64Data转Blob
   * @param dataurl 输入数据
   */
  public static dataURLtoBlob(dataurl) {
    const arr = dataurl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  }

  /**
   * 文件转base64码
   * @param file 文件
   */
  public static fileToBase64(file: File): Observable<any> {
    let base64 = null;
    return Observable.create(observer => {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        base64 = reader.result;
        observer.next(base64);
      }, false);
      if (file) {
        reader.readAsDataURL(file);
      } else {
        observer.next(base64);
      }
    });
  }

  /**
   * base64Data转文件
   * @param dataurl dataurl
   * @param filename 文件名
   */
  public static Base64ToFile(dataurl, filename) {
    const arr = dataurl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  /*
  * 数组对象去重
  * @param objArr 输入对象数组
  */
  public static uniqObjArr(objArr: Array<any>) {
    const arr = [];
    objArr.forEach(ele => {
      if (arr.length === 0) {
        arr.push(ele);
      } else {
        if (_.findIndex(arr, ele) === -1) {
          arr.push(ele);
        }
      }
    });

    return arr;
  }

  /**
   * 数组对象去重-根据某些字段值
   * @param objArr 对象数组
   * @param props 条件字段数组
   */
  public static uniqObjArrByProps(objArr: Array<any>, props: Array<any>) {
    const arr = [];
    objArr.forEach(ele => {
      if (arr.length === 0) {
        arr.push(ele);
      } else {
        if (_.findIndex(arr, (o) => {
          let isReturn = true;
          props.forEach(key => {
            if (o[key] !== ele[key]) {
              isReturn = false;
              return false;
            }
          });
          return isReturn;
        }) === -1) {
          arr.push(ele);
        }
      }
    });

    return arr;
  }

  /**
   * 日期格式化
   * @param date 日期
   * @param format 格式字符串
   */
  public static dateFormat(date, format) {
    if (!(date instanceof Date)) {
      return '';
    }

    const o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
      'q+': Math.floor((date.getMonth() + 3) / 3),
      S: date.getMilliseconds()
    };

    if (/(y+)/.test(format)) {
      format = format.replace(RegExp.$1, (date.getFullYear() + '')
        .substr(4 - RegExp.$1.length));
    }

    for (const k in o) {
      if (new RegExp('(' + k + ')').test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length === 1 ?
          o[k] : ('00' + o[k]).substr(('' + o[k]).length));
      }
    }
    return format;

  }

  /**
   * 将数组对象中指定的字段转成key和value,返回map对象
   * @param key key字段名称
   * @param value value字段名称
   */
  public static arrToMap(arr: Array<any>, key: string, value: string): {} {
    const dictMap = {};
    if (Array.isArray(arr)) {
      arr.forEach(ele => {
        dictMap[ele[key]] = ele[value];
      });
    }
    return dictMap;
  }

}
