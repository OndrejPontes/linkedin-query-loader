class SiteController < ApplicationController
  def index
    @site_props = { name: "SITE" }
  end
end
