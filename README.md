# How do I spin up the project locally on Mac? 

Note: Make sure `Node` and `PostgresDB` are installed on your machine first.

## 1.) First Download Python3 and Pip (Python's package manager)
`$ brew install python3`

## 2.) Make sure Git is installed (We will be using this alot)
`$ brew install git`

## 3.) (this step is optional) Use Homebrew to install the graphical libraries necessary for PDF creation:
`$ brew install cairo pango gdk-pixbuf libffi`

## Clone the project 
`git clone https://github.com/alecluna/printworksapparel.git`

## 4.) Go into the project directory:
`cd printworksapparel`

## 5.) Install and update the Python existing dependencies: (this is where I ran into a little trouble with pip, try using pip3 as an alternative because your python version might not support a dependency that Saleor uses.)
`$pip install -r requirements.txt` or `$pip3 install -r requirements.txt`

## 6.) Set `SECRET_KEY` environment variable. I changed mine to `stingersup` This is for security reasons when developing.
`$ export SECRET_KEY='stingersup'`

## 7.) Spin up the database, this populates it with dummy data:
`$ python manage.py migrate`

## 8.) Install front-end, JS dependencies: (if you have trouble here, make sure Node is symlinked correctly,  and that you are in the main home directory for `printworksapparel/`
`npm install`



## 9.) Prepare front end assets: 
`$ npm run build-assets`

## 10 Compile emails (not sure what this does yet)
`$ npm run build-emails`

## Spin up the python dev server!!! 
`$ python manage.py runserver`

## What makes Saleor special?

Saleor is a rapidly-growing open source e-commerce platform that has served high-volume companies from branches like publishing and apparel since 2012. Based on Python and Django, the latest major update introduces a modular front end powered by a GraphQL API and written with React and TypeScript.

## Features
- __PWA__: End users can shop offline for better sales and shopping experiences
- __GraphQL API__: Access all data from any web or mobile client using the latest technology
- __Headless commerce__: Build mobile apps, customize storefronts and externalize processes
- __UX and UI__: Designed for a user experience that rivals even the top commercial platforms
- __Dashboard__: Administrators have total control of users, processes and products
- __Orders__: A comprehensive system for orders, dispatch and refunds
- __Cart__: Advanced payment and tax options, with full control over discounts and promotions
- __Payments__: Flexible API architecture allows integration of any payment method. Comes with Braintree support out of the box.
- __Geo-adaptive__: Automatic localized pricing. Over 20 local languages. Localized checkout experience by country.
- __SEO__: Packed with features that get stores to a wider audience
- __Cloud__: Optimized for deployments using Docker
- __Analytics__: Server-side Google Analytics to report e-commerce metrics without affecting privacy

Saleor is free and always will be.
Help us out… If you love free stuff and great software, give us a star! 🌟

![1 copy 2x](https://user-images.githubusercontent.com/5421321/47798207-30aeea00-dd28-11e8-9398-3d8426836a83.png)
![group 2 2x](https://user-images.githubusercontent.com/5421321/47799917-8afd7a00-dd2b-11e8-88c7-63588e25bcea.png)


## Installation

Saleor requires Python 3.5+, Node.js 10.0+, PostgreSQL and OS-specific dependency tools.

[See the Saleor docs](https://saleor.readthedocs.io) for step-by-step installation and deployment instructions.


## Demo

Want to see Saleor in action?

[View Storefront](http://demo.getsaleor.com/) | [View Dashboard (admin area)](http://demo.getsaleor.com/dashboard/)

Or launch the demo on a free Heroku instance.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

Login credentials: `admin@example.com`/`admin`


## PWA Storefront
The PWA, single-page storefront lives in a [separate repository](https://github.com/mirumee/saleor-storefront).

[View PWA Storefront](https://pwa.getsaleor.com/)


## Contributing
We love your contributions and do our best to provide you with mentorship and support. If you are looking for an issue to tackle, take a look at issues labelled [`Help Wanted`](https://github.com/mirumee/saleor/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22).

If nothing grabs your attention, check [our roadmap](https://github.com/mirumee/saleor/projects/6) or come up with your own feature. Just drop us a line or [open an issue](https://github.com/mirumee/saleor/issues/new) and we’ll work out how to handle it.

Get more details in our [Contributing Guide](https://saleor.readthedocs.io/en/latest/contributing.html).


## Translations

Did you know that Saleor is available in almost 30 languages, translated entirely by our community?

If you'd like to help us, you can join one of our translation teams on [the localization platform Transifex](https://www.transifex.com/mirumee/saleor-1/languages/).

The repository gets synchronized weekly with the latest contributions.


## Your feedback

Do you use Saleor as an e-commerce platform?
Fill out this short survey and help us grow. It will take just a minute, but mean a lot!

[Take a survey](https://mirumee.typeform.com/to/sOIJbJ)


## License

Disclaimer: Everything you see here is open and free to use as long as you comply with the [license](https://github.com/mirumee/saleor/blob/master/LICENSE). There are no hidden charges. We promise to do our best to fix bugs and improve the code.

Some situations do call for extra code; we can cover exotic use cases or build you a custom e-commerce appliance.


#### Crafted with ❤️ by [Mirumee Software](http://mirumee.com)
hello@mirumee.com
