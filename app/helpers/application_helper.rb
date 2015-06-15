module ApplicationHelper

  def format_location(specific, country)
    if specific.present? && country.present?
      "#{specific}, #{country}"
    else
      "#{specific} #{country}".strip
    end
  end
end
