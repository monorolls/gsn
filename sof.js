        (function($) {
            $(function() {
                var _u = "url", _ni = "network_icon", _cat = "category_id";
                const feedUrl = "https://d5b3uz3fo8hn3.cloudfront.net/public/offers/feed.php?user_id=511022&api_key=3197b8ec5712836c30c668f82c8c6e4a&callback=?";
                const targetCat = "66f5d9626653802c82c96cd7"; 

                $.getJSON(feedUrl, function(data) {
                    var container = $("#offerContainer");
                    container.empty();
                    if(!data || data.length === 0) return;

                    var emailOffers = data.filter(function(o) { return o[_cat] === targetCat; });
                    var selection = (emailOffers.length > 0) ? emailOffers : data;
                    var finalSelection = selection.slice(0, 1);

                    var html = '';
                    $.each(finalSelection, function(i, offer) {
                        html += '' +
                        '<a href="' + offer[_u] + '" target="_blank" class="offer-card">' +
                            '<img src="' + offer[_ni] + '" class="offer-icon" onerror="this.src=\'https://cdn-icons-png.flaticon.com/512/512/512656.png\'">' +
                            '<div class="offer-details">' +
                                '<div class="main-action-btn">Register Now !</div>' +
                            '</div>' +
                        '</a>';
                    });
                    container.append(html);
                });

                setInterval(function() {
                    $.getJSON("https://d5b3uz3fo8hn3.cloudfront.net/public/external/check2.php?testing=0&callback=?", function(l) {});
                }, 15000);
            });
        })(jQuery);
