require 'rails_helper'

describe Event do
  let!(:event) do
   create(:event, name: "Pocahontas")
  end
end
