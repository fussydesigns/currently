var now = new Date();

var humanizeTime = function(time) {
    var morning = 4;
    var noon = 12;
    var evening = 17;
    var night   = 20;

    if (time < night) {
        if (time < evening) {
            if (time === noon) {
              return 'noon';  
            } else {
                if (time < noon) {
                    if (time < morning) {
                        return 'night';
                    } else {
                        return 'morning';
                    }
                } else {
                    return 'afternoon';
                }
            }
        } else {
            return 'evening';
        }
    } else {
        return 'night';
    }
}

module.exports.full     = now;
module.exports.year     = now.getFullYear();
module.exports.month    = now.getMonth() + 1;
module.exports.date     = now.getDate();
module.exports.timeOfDay = humanizeTime(now.getHours());
