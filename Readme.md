
# webhooks-example

  An example server for receiving [Segment webhook requests](https://segment.com/docs/integrations/webhooks).


## Getting Started

  1. Clone the repository with `git clone git@github.com:segmentio/webhooks-example.git`.
  2. Download and install [Node.js](http://nodejs.org/).
  3. Run `make` from the example directory to run the server on port `3000`.
  4. Enable webhooks for your project in [Segment](https://segment.com/). You'll want to enter your url in the form `http://YOUR_IP_ADDRESS:3000/webhooks/analytics`.

  ![Enter your webhooks URL.](https://s3.amazonaws.com/segmentio/github/images/webhooks-example/webhooks-sheet.png)

  You should see events start logging to your console as you call `analytics.track()`.


## Port Forwarding

  If you're using a router, it's likely that you'll need to enable port forwarding to receive calls from our servers. To do this, make sure you are pointing your router to your own internal IP on the same port.


## Help

  If you have any questions, you can find us on freenode in `#segmentio`, on the live chat on our [site](https://segment.com/) or at friends@segment.io.


## License (MIT)

  Copyright (c) 2016 Segment.io &lt;friends@segment.com&gt;

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
