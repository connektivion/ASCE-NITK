var year = moment().year();

jQuery(document).ready(function($) {
  $.ajax({ type:'GET' ,url: "http://asce.herokuapp.com/api/calender", success: function(result){
        var events = [];
        for(var i=0;i<result[0].events.length;i++){
          events.push({date:result[0].events[i].when,title:result[0].events[i].desc});
        }
  
      $('#mini-clndr').clndr({
        template: $('#calendar-template').html(),
        events: events,
        constraints: {
                  startDate: moment(year + '-01-01'),
                  endDate: moment(year+1 + '-12-31')
                 },
        clickEvents: {
          click: function(target) {

             if(target.events.length) {

                 var daysContainer = $('#mini-clndr').find('.days-container');
                 daysContainer.toggleClass('show-events', true);
                 $('#mini-clndr').find('.x-button').click( function() {
                   daysContainer.toggleClass('show-events', false);
                 });
               }
          }
        },
        adjacentDaysChangeMonth: true
      });
   }});
});