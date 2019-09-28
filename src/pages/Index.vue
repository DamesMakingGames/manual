<template>
  <Layout>
    <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16">
      <div class="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left">
        <div class="leading-tight">DMG Toronto</div>
        <div class="text-purple-700 leading-tight">Member Manual</div>
      </div>
      <div class="mt-8 sm:mt-0"></div>
    </div>
    <!-- end hero -->

    <div class="container-inner mx-auto">
      <p
        class="text-lg sm:text-xl"
      >While we welcome everyone to <em>almost</em> all of our events and our space…</p>

      <div class="bg-purple-700 text-white text-xl text-center p-6 my-6">
        <strong>DMG is for people who belong to gender identity groups that are systemically marginalized in tech and game spaces. We center genderqueer, nonbinary, femme people, Two Spirit people, and trans and cis women.</strong>
      </div>

      <p>We strive to prioritize the experiences of Black, Indigenous, racialized and people of color, and give up space as part of our work towards redressing dispossession, oppression, settler colonialism and the living legacy of racism. We expect all of our members to do the same.</p>

      <p>If this does not describe you, that doesn't mean you aren't welcome here! It just means that our time, effort, attention, and programming revolves around needs and interests that might not match your own. We hope you'll join as a friend, and look for ways your skills and experience can support our mission and our membership.</p>

      <p>We acknowledge the work of creating a safer, more equitable space is work that will never be complete, and that we're not perfect. The terms we use to describe our experience are always changing, and we are always listening and learning. We are eager to maintain and defend the inclusivity of this community.</p>

      <p>
        If you think of something that is missing from this handbook, or a way we could improve it, please send us an email at
        <a
          href="mailto:info@dmg.to"
        >info@dmg.to</a> or speak to an organizer.
      </p>
    </div>

    <div class="overflow-x-hidden">
      <div class="contact-me bg-background-secondary pt-16">
        <div class="container-inner mx-auto text-xl pb-4 relative">
          <h2 class="font-bold mb-6" id="contact">Anonymously report an issue.</h2>

          <div class="text-lg sm:text-lg mb-16">
            <form action="#" class="mb-12">
              <div class="w-full mb-12">
                <label class="block text-copy-primary mb-2" for="message">Message</label>

                <textarea
                  id="message"
                  rows="5"
                  name="message"
                  class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-purple-700 mb-2 px-4 py-4"
                  placeholder="Enter your message here."
                  required
                ></textarea>
              </div>

              <div class="flex justify-end w-full">
                <input
                  type="submit"
                  value="Submit"
                  class="block bg-purple-700 hover:bg-purple-800 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- end contact-me -->
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home"
  }
};
</script>

