class SetUrl < SiteBuilder
  def build
    hook :site, :pre_render do |s|
      next unless ENV["DEPLOY_PRIME_URL"] && ENV["CONTEXT"] != "production"
      Bridgetown.logger.info("Subbing Netlify URL")
      site.config.update(url: ENV["DEPLOY_PRIME_URL"])
    end
  end
end
