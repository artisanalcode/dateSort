jQuery.extend( jQuery.fn.dataTableExt.oSort, {
    "date-sort-pre": function (a) {
        var ampm;
        var month;
        if ($.trim(a) != '') {
            var frDatea = $.trim(a).split(' ');
            var frTimea = frDatea[4].split(':');
            var frDatea2 = frDatea[0].split('/');
            // Convert Month to Integer
            if (frDatea[0] == 'Jan') { month = 11; }
            if (frDatea[0] == 'Feb') { month = 12; }
            if (frDatea[0] == 'Mar') { month = 13; }
            if (frDatea[0] == 'Apr') { month = 14; }
            if (frDatea[0] == 'May') { month = 15; }
            if (frDatea[0] == 'Jun') { month = 16; }
            if (frDatea[0] == 'Jul') { month = 17; }
            if (frDatea[0] == 'Aug') { month = 18; }
            if (frDatea[0] == 'Sep') { month = 19; }
            if (frDatea[0] == 'Oct') { month = 20; }
            if (frDatea[0] == 'Nov') { month = 21; }
            if (frDatea[0] == 'Dec') { month = 22; }
            
            // Convert AM - PM to Integer
            if (frDatea[5] == 'am') { ampm = 1; }
            else if (frDatea[5] == 'pm') { ampm = 2; }
            
            var time = parseInt(frTimea[0])
            
            if (time == 12 ) {
                time = 10;
            }
            else {
                time = time + 10
            }
            var x = ( frDatea[2] + month + ((parseInt(frDatea[1]) + 10))  + ampm + time + frTimea[1]);
        
        } else {
            var x = 10000000000000; 
        }
        
        return x
         
    },
 
    "date-sort-asc": function (a, b) {

        return a - b;
        
    },
 
    "date-sort-desc": function (a, b) {

        return b - a;
    }
} );