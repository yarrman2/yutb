var Utils = {
    String: {
        Spaces: function (text) {
            text = '' + text;
            var ta = text.split('').reverse();
            var res = '';
            ta.forEach(function (c, idx) {
                res = c + res;
                if (idx > 0 && idx % 3 == 2) {
                    res = ' ' + res;
                }
            });
            return res.trim();
        }    
    }    
}