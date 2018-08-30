/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /*This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* atests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* a test that ensures each feed URL is defined
         * and that the URL is not empty.
         */
         it('feed has a valid url', function(){
           allFeeds.forEach(function(e, i){
             expect(allFeeds[i].url).toBeDefined();
             expect(allFeeds[i].url).not.toBe(undefined);
             expect(allFeeds[i].url).not.toBe("");
           })

         })

        /* a test that ensures each feed name is defined
         * and that the name is not empty.
         */
         it('feed has a valid name', function(){
           allFeeds.forEach(function(e, i){
             expect(allFeeds[i].name).toBeDefined();
             expect(allFeeds[i].name).not.toBe(undefined);
             expect(allFeeds[i].name).not.toBe("");
           })

         })
    }); //closes RSS Feeds



describe("The menu", function(){
  let bodyClass = $('body')[0].className;
  let body = $('body');

        /* a test that ensures the menu element is
         * hidden by default
         */
         it("is hidden by default", function() {
           expect(bodyClass).toBe('menu-hidden');
         })
         /* test that ensures the menu changes
          * from hidden to visible when the menu icon is clicked.
          */
      it('toggles visibility on click', function() {
        $('.menu-icon-link').trigger('click'); 
        expect(body.hasClass('menu-hidden')).toBe(false);
        $('.menu-icon-link').trigger('click');
        expect(body.hasClass('menu-hidden'));
    });

  }); //closes The menu

describe("Initial Entries", function() {
         //async 
    beforeEach(function(done) {
        setTimeout(function() {
          done();
        }, 1);
    });

        /* a test that ensures there is at least
         * a single .entry element within the .feed container.
       */
    it('should output entry from loadFeed', function(done){
        expect($('.feed').children.length).toBeGreaterThan(0);
        done();
    });
}) // close initial entries

describe("News Selection Feed", function(){
    
    let load1;
     //async loadFeed
    beforeEach(function(done) {
        loadFeed(0, function() {
            load1 = $('.feed').html();
        });
        loadFeed(1, function() {
          done();
        })
    })
        /* a test that ensures when a new feed is loaded
         * by the loadFeed function the content will change.
         */
    it('should load content of selected RSS feed', function(done){
        let load2 = $('.feed').html();
        $('.feed').trigger('click'); 
        expect(load2).not.toEqual(load1);
        done();
    })
})//closes news selection feed
}());
